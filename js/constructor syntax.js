var hotel = new Object();
hotel.name = 'Quay';
hotel.rooms = 100;
hotel.booked = 20;


hotel.checkBeschikbaarheid = function() {

  return this.rooms - this.booked;
};
var elName = document.getElementById('hotelnaam');
elName.textContent = hotel.name;

var Elrooms = document.getElementById('rooms');
Elrooms.textContent = hotel.checkBeschikbaarheid();
