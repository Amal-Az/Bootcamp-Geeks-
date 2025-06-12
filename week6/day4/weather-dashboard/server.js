const express = require('express');
const axios = require('axios');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'weather_dashboard',
  password: 'amal',
  port: 5432,
});

// Create table if not exists
pool.query(`CREATE TABLE IF NOT EXISTS history (
  id SERIAL PRIMARY KEY,
  city TEXT,
  weather JSONB,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

// Weather endpoint using Open-Meteo (no API key required)
app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City required' });
  try {
    // Get latitude and longitude from Open-Meteo geocoding API
    const geoRes = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
      params: { name: city, count: 1 }
    });
    if (!geoRes.data.results || geoRes.data.results.length === 0) {
      return res.status(404).json({ error: 'City not found' });
    }
    const { latitude, longitude, name, country } = geoRes.data.results[0];
    // Fetch weather data
    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude,
        longitude,
        current_weather: true,
        hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m'
      }
    });
    const weather = weatherRes.data;
    // Add city and country info to weather object
    weather.city = name;
    console.log(weatherRes.data);
    weather.country = country;
    await pool.query('INSERT INTO history (city, weather) VALUES ($1, $2)', [city, weather]);
    res.json(weather);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Weather fetch failed' });
  }
});

// History endpoint
app.get('/api/history', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM history ORDER BY timestamp DESC LIMIT 10');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'DB error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});