// Import stylesheets
import './style.css';

const cityElems = Array.from(document.getElementsByClassName('citta'));
// Usate questa per qualche prova, poi create un vostro account
// su www.openweathermap.org e create una API key personale
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const leCitta = ['Genova', 'Milano', 'Torino', 'Roma'];
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
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
async function doCity(c, callback) {
  return fetch(URL + c)
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
async function calcoloMedia() {
  let media = 0;
  for (let c of leCitta) {
    media += await doCity(c, (d) => d.main.temp / leCitta.length);
  }
  document.getElementById('media').innerHTML = media;
}