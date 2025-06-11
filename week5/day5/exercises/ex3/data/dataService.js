const axios = require('axios');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données');
  }
}

module.exports = {
  fetchPosts
};
