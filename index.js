// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Temperature</h1>`;

window.display = function() {
  var request = new XMLHttpRequest();
  var city = event.srcElement.id;
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      event.srcElement.id,
    false
  );
  request.onload = () => {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById("risposta").innerText =
        "A " + city + " ci sono " + dataObject.main.temp + " gradi";
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };
  request.send();
}
