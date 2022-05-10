# Servizio meteorologico

Un esempio estremamente semplice ma completo di tutte le parti: una interfaccia grafica, una base di dati, un motore che interroga il database e mostra i dati.

In evidenza la modalità asincrona della 'request.open': viene stampato il timestamp al termine della 'display' e al termine del callback 'onload'. Il primo precede sempre il secondo di decine di msec. Se il terzo parametro della request.open viene impostato a false la request diventa sincrona, e la display termina poco dopo il callback (timestamp identici o con 1msec di differenza)


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswtemp)
