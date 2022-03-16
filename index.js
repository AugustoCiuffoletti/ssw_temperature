// Import stylesheets
import './style.css';

// Usate questa per qualche prova, poi create un vostro account
// su www.openweathermap.org e create una API key personale
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const leCitta = ['Genova', 'Milano', 'Torino', 'Roma'];
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
let media = 0;
// Crea una lista di bottoni con i nomi delle città
leCitta.map((citta) => {
  const btn = document.createElement('button');
  btn.innerHTML = citta;
  btn.addEventListener('click', () => display(btn.innerHTML));
  const item = document.createElement('li');
  item.appendChild(btn);
  document.getElementById('citta').appendChild(item);
});
document
  .getElementById('calcolaMedia')
  .addEventListener('click', () => calcoloMedia());
function doCity(c, callback) {
  let promise = fetch(URL + c)
    .then(
      (response) => response.json(),
      (error) => alert(error)
    )
    .then((data) => callback(data));
}
function display(c) {
  doCity(c, (d) => {
    document.getElementById('risposta').innerHTML =
      'A ' + c + ' ci sono ' + d.main.temp + ' gradi';
  });
}
function calcoloMedia() {
  media = 0;
  leCitta.map((c) => {
    doCity(c, (d) => {
      media += d.main.temp / leCitta.length;
      document.getElementById('media').innerHTML = media;
    });
  });
}
