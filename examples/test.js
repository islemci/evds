const evdsAPI = require('evds');

// Kendi API anahtarınızı buraya girin
const key = 'API_KEY';
const evds = new evdsAPI(key);

// Günlük veriyi çeker
evds.fetchSeries('TP.DK.USD.S.YTL', '13-09-2024', '16-09-2024')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message);
  });