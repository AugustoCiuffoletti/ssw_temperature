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
// Funzione collegata ai bottoni
function display(c) {
  const request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"
  // Funzione callback invocata quando la request termina
  request.onload = () => {
    // funzione definita arrow
    if (request.status === 200) {
      let dataObject = JSON.parse(request.response);
      document.getElementById('risposta').innerHTML =
        new Date().toISOString() + ': A ' + c + ' ci sono ' + dataObject.main.temp + ' gradi: ';
    } else {
      document.getElementById('risposta').innerText = 'Errore';
    }
  };
  // Applico il metodo "open"
  request.open('GET', URL + c, true);
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
  console.log(new Date().toISOString() + ': Finito:');
}
// 
function calcoloMedia() {
  media = 0;
  leCittà.map((città) => {
    console.log(città);
    let request = new XMLHttpRequest();
    request.onload = () => {
      if (request.status === 200) {
        media += JSON.parse(request.response).main.temp / leCittà.length;
        document.getElementById("media").innerHTML = media;
      }
    };
    request.open('GET', URL + città, true);
    request.send();
  });
}
