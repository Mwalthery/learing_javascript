function Hotel(name, rooms, booked) {
this.name =  name;
this.rooms = rooms;
this.booked = booked;

this.checkBeschikbaarheid = function() {

return this.rooms - this.booked;

};

}

var quayHotel = new Hotel ('quay', 40, 25);
var parkHotel = new Hotel ('park', 20, 10);

var details1 = quayHotel.name + ' rooms ';
    details1 += quayHotel.checkBeschikbaarheid();

var elHotel = document.getElementById('Hotel');
elHotel.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkBeschikbaarheid();

var elHotel2 = document.getElementById('Hotel2');
elHotel2.textContent = details2;
