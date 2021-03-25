// QUESTION 1
var a = 25;
a   = a - 13;
co  nsole.log(a/2);
      
  a = "hello";
  console.log(a + " hello");
  
  // result:
  // 6
//   hello hello
  
  // QUESTION 2
  var isSunny = true;
  var temperature = 45; // let's assume degrees Fahrenheit
va  r isRaining = false;
var   whatToBring = "I should bring: ";
      
if(i  sSunny) {
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

// result:
// I should bring: sunglas ses, a coat, and a smile!

// -------------- THURSDAY -------------------------------------------//
// QUESTION 1
for(var i=0; i<10; i++) {
  console.log(i);   // 0
  i = i + 3;        // 4
}                   // 8
```
OUTPUT


```
  
console.log("outside of the loop " + i);
                    //""

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



```

// -------------- THURSDAY -------------------------------------------//