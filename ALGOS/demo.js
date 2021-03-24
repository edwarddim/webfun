// algorithims => using code to solve a problem

// VARIABLES & DATA TYPES
// DECLARE VARIABLES
var fullName
// INITIALIZING VARIABLES
fullName = "Edward Im"

var full_name = "Ed Im"

var age = 30
var double = 2.22
var float = 3.333333
var check = true 
var something = false

// MATH OPERATIONS
var answer = 2 + 2
answer = 4 - 2
answer = 4 * 2
answer = 4 / 2 //division

answer = 3 % 4 // modulus

// CONDITIONALS - COMPARE TO DATA TYPES
// == , < , <= , >, >=, !=

if( 2 < 5 ){
    console.log("INDEED 2 IS LESS THAN 5")
}


var number = 4

if(number < 3){
    console.log("NUM IS LESS THAN 3")
}
else if(number === 4){
    console.log("NUM IS 4")
}
else if(number === "edward"){
    console.log("NUM IS EDWARD")
}
else if(number %2 == 0){
    console.log("NUM IS EVEN")
}
else{
    console.log("NUM IS GREATER THAN 4")
}


4 == "4" // true
4 === "4" // false


// DRY - DON'T REPEAT YOURSELF
// LOOPS


for(var i = 50; i >= 0; i--){
    console.log("hello")
    console.log(i)
}

var i = 50
while(i >= 0 ){
    console.log("hello")
    console.log(i)
    i--
}

var dice_roll = Math.floor(Math.random() * Math.floor(6))
while(dice_roll != 3){
    console.log("You rolled " + dice_roll)
    dice_roll = Math.floor(Math.random() * Math.floor(6))
}