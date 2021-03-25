// QUESTION 1
var a = 25; //a = 25
a = a - 13; //a=
console.log(a/2);
    
a = "hello";
console.log(a + " hello");
/*
Output: 
6, 
hello hello
*/

// QUESTION 2
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

// Output: I should bring sunglasses, a coat, and a smile!

// QUESTION 1
for(var i=0; i<10; i++) {
  console.log(i);
  i = i + 3; 
}


 
console.log("outside of the loop " + i);

// QUESTION 2
for(var i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}
console.log("liftoff!");

