// QUESTION 1
var a = 25;
a = a - 13; //25-13=12
console.log(a/2);// 12/2=6 logs 6
    
a = "hello"; //resets a="hello"
console.log(a + " hello"); // logs hello hello

```
OUTPUT:
PUT YOUR PREDICTIONS HERE
6
hello hello
```

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
```
OUTPUT:
PUT YOUR PREDICTIONS HERE

```//sunglasses and a smile