
// dit script geeft een groeting aan op basis van de huidige tijd waarin de gebruiker zich bevindt
var today = new Date(); // creërt nieuw datum object
var HourNow = today.getHours(); // zoekt het huidige uur
var greeting;

// geeft een passende groeting weer gebasseerd op de huididge tijd
if (HourNow > 18){ // als het later is dan 18 uur s avonds
  greeting = "Good evening!";
}
else if (HourNow > 12) // als het later is dan 12 uur
{

  greeting = "Good afternoon";
}
else if (HourNow > 0){ // als het later is dan 24 uur (00:00)

greeting = "Good morning!";

}

else { // als er geen tijd kan worden gevonden geef dan "welcome" weer

greeting = "Welcome";

}
document.write('<h3>' + greeting + '</h3>'); // document schrijf in H3 de groeting die bij het uur past

// einde oefening één
