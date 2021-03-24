// QUESTION 1
var a = 25;           //a = 25
a = a - 13;           //a = 12
console.log(a/2);     //log 6
    
a = "hello";          //a= hello
console.log(a + " hello");
/*
Output:
6
hello hello
*/

// QUESTION 2
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {    //true
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {    //true
  whatToBring += "a coat, ";
}
if(isRaining) {    //false
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

/*
isSunny = true
temperature = 45
isRaing = false
whatToBring = "I should bring: " => "I should bring: sunglasses, a coat, and a smile!"



Output:
I should bring: sunglasses, a coat, and a smile!

*/