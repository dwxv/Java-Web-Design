console.log("hello world");

//comment
//boolean, number, string, null, undefined, (Symbol), objects

// Template literal, Object literal

let q = 10;
let w = 20;

console.log(`${q}+${w} is ${q+w}`);

//
let x = 10;
x = 'abc';
const y = 20;

a = 10; //global scope..outside of functions
var b = 20; //function scope..only in function (good) (recommended for browsers)
let c = 30; //block scope (good but old)
const d = 40; //block scope

//

function foo() {
    let sum = 0;
    for (let i = 0; i < 10; ++i) {
        sum += i;
    }
    console.log(sum)
}

foo();

//object
car = {make: "Honda", model: "Civic"}
car.make;
car["make"];

make = "model";
car[make];

car.owner = "John";

//list
a = ["x", "y"];
a[2] = "z";
console.log(a);
   //creates 7 empty items
a[10] = 'f';
a.length;

//operators
typeof(a);
car.instanceof;
   //in and delete for objects
10 > 20;
a > b;

    //=== !== (same type and value)

    //NaN = not a number

//Statement
    //regular for loop
    //no for-each loop
    
    //there is for-in {keys} and for-of{values}
    
    //semi colon is not require but recommended

//functions
bar = function() {
    console.log("bar");
};

bar;

setTimeout(bar, 5000);

    //function literal as parameter
setTimeout( function() {
    console.log("foobar");},
    5000 )

    //arguments.length or arguments[0]

    //Arrow function
    a=>a*2;

//methods
car.printOwner = function() { console.log(`The owner is ${this.owner}`);  }

car.printOwner();

