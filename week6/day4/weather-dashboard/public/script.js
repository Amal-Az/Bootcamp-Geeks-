document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('weather-form');
  const cityInput = document.getElementById('city-input');
  const weatherResult = document.getElementById('weather-result');
  const historyList = document.getElementById('history-list');

  async function fetchWeather(city) {
    weatherResult.innerHTML = 'Loading...';
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();
      console.log(data)
      if (data.error) throw new Error(data.error);
      // Format weatherResult for Open-Meteo data
      const current = data.current_weather;
      const cityName = data.city || city;
      const country = data.country || '';
      const temp = current.temperature;
      const wind = current.windspeed;
      const humidity = data.hourly && data.hourly.relativehumidity_2m ? data.hourly.relativehumidity_2m[data.hourly.time.indexOf(current.time)] : 'N/A';
      weatherResult.innerHTML = `
        <h3>${cityName}, ${country}</h3>
        <p><strong>Current:</strong> ${temp}°C, Wind: ${wind} km/h, Humidity: ${humidity}%</p>
        <p><strong>Time:</strong> ${current.time.replace('T', ' ')}</p>
      `;
      fetchHistory();
    } catch (err) {
        console.error(err)
      weatherResult.innerHTML = `<span style="color:red;">${err.message}</span>`;
    }
  }

  async function fetchHistory() {
    const res = await fetch('/api/history');
    const history = await res.json();
    historyList.innerHTML = '';
    history.forEach(item => {
      let weather = item.weather;
      if (typeof weather === 'string') weather = JSON.parse(weather);
      const city = weather.city || item.city;
      const country = weather.country || '';
      const current = weather.current_weather;
      let humidity = 'N/A';
      if (weather.hourly && current && weather.hourly.time) {
        const idx = weather.hourly.time.indexOf(current.time);
        if (idx !== -1 && weather.hourly.relativehumidity_2m) {
          humidity = weather.hourly.relativehumidity_2m[idx];
        }
      }
      historyList.innerHTML += `
        <div class="card-history">
          <div class="card-history-header">
            <span class="card-history-city">${city}, ${country}</span>
            <span class="card-history-time">${new Date(item.timestamp).toLocaleString()}</span>
          </div>
          <div class="card-history-details">
            <span>${current.temperature}°C</span>
            <span>Wind: ${current.windspeed} km/h</span>
            <span>Humidity: ${humidity}%</span>
          </div>
        </div>
      `;
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
  });

  fetchHistory();
});