var dag = new Date();
var uur = today.getHours();
var greeting;

if (uur > 12){

greeting = 'hello';

}

else if (uur > 18) {
  greeting = 'hey';
  }

  else if (uur > 0) {
    greeting = 'hoi';
  }

  else{

greeting = 'bye';

  }
