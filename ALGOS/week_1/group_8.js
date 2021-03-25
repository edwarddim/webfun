6
hello hello

"I should bring: sunglasses, a coat, and a smile!"

// QUESTION 1
for(var i=0; i<10; i++) {    //i=0 4 8 12
    console.log(i);          // log 0 4 8
    i = i + 3;               //i=3 7 11
  }
  console.log("outside of the loop " + i);

  ```
  OUTPUT
  0
  4
  8
  outside of the loop 12
  ```


  // QUESTION 2
  for(var i=10; i>0; i--) {     //i = 10   9...    2     1
    if(i != 2) {               //eval true true... false true
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
  console.log("liftoff!");
  
  ```
  OUTPUT
  10
  9
  8
  7
  6
  5
  4
  3
  ignition!
  1
  liftoff!


  var x = 1
  console.log("message: " + x) //x stays integer
  x+= "message"  //now a string