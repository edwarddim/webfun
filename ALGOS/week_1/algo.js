
// -------------- WEDNESDAY ------------------------------------------//
// QUESTION 1
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");1

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
// -------------- WEDNESDAY ------------------------------------------//

// -------------- THURSDAY -------------------------------------------//
// QUESTION 1
for(var i=0; i<10; i++) {
  console.log(i);
  i = i + 3; 
} 
console.log("outside of the loop " + i)
console.log("outside of the loop ", i, false)

```
OUTPUT
0
4
8
outside the loop 12
```

// QUESTION 2
for(var i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}
console.log("liftoff!");
```
OUTPUT
10, 9, 8, 7, 6, 5, 4, 3
ignition
1
liftoff

```

// -------------- THURSDAY -------------------------------------------//
