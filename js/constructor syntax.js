var hotel = new Object();
hotel.name = 'Quay';
hotel.rooms = 100;
hotel.booked = 20;


hotel.checkBeschikbaarheid = function() {

  return this.rooms - this.booked;
};
var elName = document.getElementById('HotelQ');
elName.textContent = hotel.name;

var Elrooms = document.getElementById('roomsQ');
Elrooms.textContent = hotel.checkBeschikbaarheid();
