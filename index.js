// Import stylesheets
import './style.css';

const cityElems = Array.from(document.getElementsByClassName('città'));
// Usate questa per qualche prova, poi create un vostro account
// su www.openweathermap.org e create una API key personale
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const leCittà = ['Genova', 'Milano', 'Torino', 'Roma'];
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
let media = 0;
// Crea una lista di bottoni con i nomi delle città
leCittà.map((città) => {
  const btn = document.createElement('button');
  btn.innerHTML = città;
  btn.addEventListener('click', () => display(btn.innerHTML));
  const item = document.createElement('li');
  item.appendChild(btn);
  document.getElementById('città').appendChild(item);
});
document
  .getElementById('calcolaMedia')
  .addEventListener('click', () => calcoloMedia());
function doCity(city, callback) {
  var request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status === 200) {
      callback(JSON.parse(request.response));
    } else {
      throw 'Errore';
    }
  };
  request.open('GET', URL + city, true);
  request.send();
}
// Funzione collegata ai bottoni
function display(c) {
  doCity(c, d => 
  document.getElementById('risposta').innerHTML =
  new Date().toISOString() +': A ' + c + ' ci sono ' + d.main.temp + ' gradi: '
  )
}
//
function calcoloMedia() {
  media = 0;
  leCittà.map( c => {
    doCity(c, (d) => {
      media = media + d.main.temp / leCittà.length;
      document.getElementById('media').innerHTML = media;
    });
  })
}
