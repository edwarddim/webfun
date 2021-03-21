// R - REITERATE
// I - INPUT
// O - OUTPUT
// T - TEST CASES



// MONDAY
// GO OVER RIOT
// Given an array, reverse the numbers within the array.
// Create a new array and return that array
// Reverse the array in place without creating a new array (you're going to need a TEMP variable)
function arrayReverse(arr){

}
// [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1]

// MONDAY ALTERNATE
function moveZero(arr){

}
// Given an array, move all the zeroes to back of array
// You may return a new array or for BONUS do it in-place with the help of the splice() method
// [1,0,2,0,0,3,4,5] => [1,2,3,4,5,0,0,0]

// Given an array, return a new array filled with every addition combination of all the numbers within the array
function twoNumSum(arr){
    var newArr=[]
    for (var i=0; i<arr.length; i++){
        for (var j=i; j<arr.length; j++)
            newArr.push(arr[i]+arr[j]);
    }
    return newArr;
}

twoNumSum([1,2,3,4]);
// [1,2,3,4] => [2,3,4,5,4,5,6,6,7,8]



// Given an array, return a new array filled with every addition combination of all the numbers within the array
function twoNumSum(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i ; j < arr.length; j++) {
            arr[i] = arr[i] + arr[j];
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
twoNumSum([1,2,3,4]);

// [1,2,3,4] => [2,3,4,5,4,5,6,6,7,8





// THURSDAY
// Return true or false depending on if the TARGET number exists with the array provided


// 1. STORE START AND END INDEX INSIDE VARIABLES
// 2. DETERMINE MIDDLE OF THE THE START AND END
// 3. CHECK TO SEE IF MIDDLE NUMBER IS THE TARGET VALUE, IF MIDDLE IS TARGET RETURN TRUE
// 4. IF NOT, EVALUATE WHICH SIDE OF THE ARRAY YOU WANT TO SEARCH AND MOVE THE START OR END TO CORRECT POSITION

// IF THE START INDEX IS GREATER THAN THE END INDEX, THE NUMBER DOES NOT EXIST IN ARRAY RETURN FALSE
function binarySearch(arr, target){

    var start = 0; //0
    var end = arr.length-1;
    
    while(start <= end){
        // YOU ONLY WANT TO EVALUATE THE MIDDLE ONCE EVERY LOOP
        var middle = Math.floor((end+start)/2);

        if (target === middle) {
            console.log(true)
        }
        else if (target !== middle && target > middle){
            start = middle 
            // middle = Math.floor((start+end)/2)
        }
        else if (target !== middle && target < middle){
            end = middle 
            // middle = Math.floor((start+end)/2)
        }
        if (start > end){
            console.log('Number does not exist')
        }
    }
}
// [1,2,3,4,5,6],5 => TRUE
// [1,2,3,4,5,6],9 => FALSE



function binarySearch(arr, target){

    var start = 0; //0
    var end = arr.length-1;
    
    while(start <= end){
        var middle = Math.floor((arr.length -1)/2);

        if (target === middle) {
            console.log(true);
        }
        else if (target !== middle && target > middle){
            start = middle + 1;
            middle = Math.floor((start+end)/2);
        }
        else if (target !== middle && target < middle){
            end = middle - 1;
            middle = Math.floor((start+end)/2);
        }
    }
} 

binarySearch([1,2,3,4,5,6,7,8,9], 3)


// START AND END SHOULD BE INDEXES
function binarySearch(arr, target){
    
var start = arr[0]; //0
var end = arr[arr.length -1]; //ARR.LENGTH-1
var mid = arr[(arr.length-1) / 2 ];

if (target == mid) {
    return true;
} else if (target !== mid && target < mid){
    end = mid + 1;
} else if (target !== mid && target > mid){
    start = mid - 1;
}

console.log(mid);

binarySearch([1,2,3,4,5,6,7,8,9], 3)

