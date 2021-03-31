// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
// You may use a modulus operator for this exercise.
function evenSum1000(){
    // NEED A VARIABLE TO KEEP OF SUM
    var sum = 0
    // LOOP FROM 1 TO 1000 AND GRAB ALL THE EVEN NUMBERS
    for(var i = 2; i < 1001;i++){
        if(i % 2 == 0){
            sum = sum + i
            // sum += i
        }
    }
    console.log("THE SUM IS: ", sum)
}
function evenSum1000(){
    // NEED A VARIABLE TO KEEP OF SUM
    var sum = 0
    // LOOP FROM 1 TO 1000 AND GRAB ALL THE EVEN NUMBERS
    for(var i = 0; i < 1001;i+=2){
        sum = sum + i
        // sum += i
    }
    console.log("THE SUM IS: ", sum)
}
evenSum1000()

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(array, y){
    var count = 0
    // ITERATRE THROUGH THE ARRAY
    for(var i = 0; i < array.length; i ++){
        // CHECK TO SEE IF EACH VALUE IS GREATER THAN Y, KEEP TRACK OF THE AMOUNT OF NUMBERS GREATER THAN Y
        if( array[i] > y ){
            count++
        }
    }
    console.log(count)
}
// greaterThanY( [1, 3, 5, 7], 3 )
// greaterThanY( [0,0,0,0,0,0,0], 3 )


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNegatives(array){
    // ITERATE THORUHG ARRAY AND CHECK FOR NEGATIVE VALUES
    for(var i = 0; i < array.length; i++){
        if( array[i] < 0 ){
            array[i] = 0
        }
    }
    console.log(array)
}
replaceNegatives([1,5,10,-2])
replaceNegatives([-2,-2,-2,-2])


// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
// Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function prevLengths(array){
    // LOOP THROUGH THE ARRAY IN REVSERE
    for(var i = array.length - 1; i > 0; i--){
        // GRAB THE PREVIOUS ELEMNT'S LENGTH AND STORE IN THE CURRENT INDEX
        array[i] = array[i-1].length
    }
    return array
}
// console.log(prevLengths(["hello", "dojo", "awesome"]))


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array values are "food", then print "I'm hungry" once.
function alwaysHungry(array){
    var hungry = true
    // ITERATE THROUGH THE ARRAY
    for(var i = 0; i < array.length; i ++){
        // CHECK TO SEE IF ANY VALUES IS EQUAL TO "food"
        if(array[i] == "food"){
            console.log('YUMMY')
            hungry = false
        }
    }
    if(hungry){
        console.log("I'M HUNGRY")
    }
}
alwaysHungry([1,2,3,4,5,5,6,67])
console.log("-----------------------------------")
alwaysHungry([1,2,3,4,"food",5,6,67])
console.log("-----------------------------------")
alwaysHungry([1,2,3,4,"food",5,"food",67])

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true]. 
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(array){
    for(var i = 0; i < Math.floor(array.length/2); i++){
        if(i % 2 === 0){
            var temp = array[i]
            array[i] = array[array.length - 1 -i]
            array[array.length - 1 -i] = temp
        }
    }
    console.log(array)
}
swapTowardCenter(["pizza", 42, "Ada", 2, true])
swapTowardCenter([1,2,3,4,5,6])