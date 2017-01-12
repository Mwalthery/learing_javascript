
// maak variabelen aan om waardes aan toe te kunnen voegen
var name;
var special;
// geef waardes aan een variabele
name = "Michael voor jou"; // tekst ook altijd op één lijn houden, nooit op meerdere lijnen! 
special = "<a href= 'https://www.google.be' target='_blank'>klik</a>"; // zorg dat de haakjes gelijk blijven buitenste haakjes "", haakjes binnenin '' nooit dubbele haakjes gebruiken binnenin

var elTitle = document.getElementById('klik');
elTitle.innerHTML = name; //innerHTML = textContent

var Elspecial = document.getElementById('message');
Elspecial.innerHTML = special;
