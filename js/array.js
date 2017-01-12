//arrays

// 2 soorten Array Literal en Array constructor

//Array Literal
{
var colors;
colors = ['white', 'red' , 'green']; // 3 waardes opgegeven, de eerste waarde is altijd 0, tweede waarde 1, etc

var el = document.getElementById('colors');
el.textContent = colors [0];  // nu roep je de waarde van de array. in dit geval waarde white doordat de telling altijd start bij 0

//Array constructor

}
{
var kleur = new Array('yellow', 'black', 'orange'); // andere wijze om array, je geeft aan nieuwe array, en geeft de waardes aan geen square brackets nodig voor dit

var kl = document.getElementById('kleuren');
kl.textContent = kleur.item(2); // item is hetzelfde als [0] maar op een andere manier
}
