function Hotel(name, rooms, booked) {
this.name = "quay";
this.rooms = 120;
this.booked = 10;

this.checkBeschikbaarheid = function() {

return this.rooms - this.booked;

};


}
