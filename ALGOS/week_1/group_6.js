// QUESTION 1
for(var i=0; i<10; i++) {
    console.log(i);     // Print out current value of i
    i = i + 3;          // i increases by 3
  }                     // loop ends with i++
  console.log("outside of the loop " + i);

  ```
  OUTPUT
  0
  4
  8
  outside of the loop 12
  ```
    
    
  // QUESTION 2
  for(var i=10; i>0; i--) {
    if(i != 2) {        // if i does not equal 2
      console.log(i);   // print current value of i
    } else {            // otherwise (aka, if i DOES equal 2)
      console.log("ignition!"); // print ignition!
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
  ```