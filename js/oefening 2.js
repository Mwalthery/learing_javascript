// gebruiken van variabelen oefening 2

// maak variables waar informatie moet worden in opgeslagen

var price;
var quantity;
var total;
// wijs waardes toe aan de variables
price = 5;
quantity = 14;
total = price * quantity; // vermeerder de prijs en de hoeveelheid om het totaal te bekomen


// maak de prijs zichtbaar door er een id toe te wijzen met de nam cost
var el = document.getElementById('cost');
el.textContent = '$' + total;



// Create three variables to store the information needed.
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
price = 5;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var el = document.getElementById('cost');
el.textContent = '$' + total; //textContent is specifiek voor tekstuele inhoud zichtbaar te maken


/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/
