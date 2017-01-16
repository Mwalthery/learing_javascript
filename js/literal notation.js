var hotel = {  //object

  name: 'quay', //properties
  rooms: 40,
  booked: 25,

  checkBeschikbaarheid: function() { //method
    return this.rooms - this.booked;
  }
};

var elName = document.getElementById('hotelnaam');
elName.textContent = hotel.name;

var Elrooms = document.getElementById('rooms');
Elrooms.textContent = hotel.checkBeschikbaarheid();
