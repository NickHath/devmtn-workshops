console.log('this is working');

// conditional breakpoints
var runBreakpoint = false;

// regular breakpoints (we can disable them whenever)
// and blackbox scripts when needed
var test = 'testing 123';

console.log('whoa');

let teststring;
function showThing(string){
    // WATCH VARIABLES
    teststring = string;
    console.log(`this is my string: ${string}`);
}

showThing('What\'s up?');

// event handler breakpoints
const box = document.querySelector('.box');
box.addEventListener('click', function() {
  this.classList.add('red');
});

// look at scope tab
class Dog {
  constructor(name, sound) {
    this.state = { name, sound };
  }

  bark() {
    console.log(this.state.sound);
  }
}

const fido = new Dog('Fido', 'WOOF');
const carly = new Dog('Carly', 'RUFF');
fido.bark();
carly.bark();


