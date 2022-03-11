# Servizio meteorologico

Utilizzando async/await possiamo semplificare il calcolo della media, facendo in modo che ad ogni passo di un for venga effettivamente acquisita una temperatura. Utilizzando un ''await'' la funzione deve essere necessariamente dichiarata come ''async'', e quindi restituire una promessa. Il procedimento ora è meno efficiente, perchè i download vengono eseguiti in successione, invece che concorrentemente.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswtemp)
