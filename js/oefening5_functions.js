

var msg = 'say hello to your new friends';

function updateMSG (){

var el = document.getElementById('test');
el.textContent = msg;

}

updateMSG();

var dag = new Date(); //datum ophalen
var uur = today.getHours(); // uur ophalen
var greeting;

function Hello() {
    // nieuwe funtie Hello

    if (uur > 12) {
        //later dan 12 uur s'middags
        greeting = 'Goeie middag';
        //later dan 18 s' avonds
    } else if (uur > 18) {
        greeting = 'Goeie avond';
    } else if (uur > 0) {
        // later dan 24 uur s' nachts
        greeting = 'Goeie morgen';
    } else {
        // als er geen uur kan worden gevonden plaats welkom
        greeting = 'Welkom';

    }
    var el = document.getElementById('hello'); //id is hello
    el.textContent = greeting; // toon message

}
Hello(); // calling function Hello
