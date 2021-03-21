function moveZero(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0)
        }
    }

    return arr;
}

function arrayReverse(arr){
    var newArray = [];
    for (var i = arr.length - 1; i>= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function revArr(arr) {

    for (var i = 0; i < arr.length/2 ; i++) {
        var temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i]
        arr[i] = temp;
    }

    return arr
}


// Given an array and a number, add the number to the front of the array
// DO THIS WITH ONLY PUSH
function pushFront(arr, num){

}
// [1,2,3,4,5] , 9 => [9,1,2,3,4,5]

function pushFront(arr, num) {

    var newFront = [];
    newFront.push(num)
    for (var i = 0; i < arr.length; i++) {
        newFront.push(arr[i])
    }

    return newFront
}


function pushFrontNew(arr, num) {

    arr.push(num);
    for(var i = 1; i < arr.length; i++) {
        var temp = arr[i - 1]
        arr[i] = arr[i - 1];
        
    }

    arr[0] = num;
    return arr
}

// Given an array, remove the first number from array.
// DO THIS WITH ONLY POP
function popFront(arr){

    var newPop = [];
    for(var i = 1; i < arr.length; i++) {
        newPop.push(arr[i])
    }
    
    return newPop
}
// [1,2,3,4,5] => [2,3,4,5]

// Given an array, return a new array filled with every addition combination of all the numbers within the array
function twoNumSum(arr){

    var twoSum = [];
    var anotherArr = []
    for(var i = 0; i < arr.length; i++) {
        for(var j = i; j < arr.length; j++){
            twoSum.push(arr[i] + arr[j])
        }
    }

    return twoSum
}

console.log(twoNumSum([1,2,3,4]))
// [1,2,3,4] => [2,3,4,5,4,5,6,6,7,8]


// Return true or false depending on if the TARGET number exists with the array provided


// 1. STORE START AND END INDEX INSIDE VARIABLES
// 2. DETERMINE MIDDLE OF THE THE START AND END
// 3. CHECK TO SEE IF MIDDLE NUMBER IS THE TARGET VALUE, IF MIDDLE IS TARGET RETURN TRUE
// 4. IF NOT, EVALUATE WHICH SIDE OF THE ARRAY YOU WANT TO SEARCH AND MOVE THE START OR END TO CORRECT POSITION

// IF THE START INDEX IS GREATER THAN THE END INDEX, THE NUMBER DOES NOT EXIST IN ARRAY RETURN FALSE
function binarySearch(arr, target){

}
// [1,2,3,4,5,6],5 => TRUE
// [1,2,3,4,5,6],9 => FALSE
// START AND END SHOULD BE INDEXES
function binarySearch(arr,target){
    arr.sort();

    var start = 0; //0
    var end = arr.length - 1; //ARR.LENGTH-1
    var middle = Math.floor((last - first)/2);

    while(arr[middle] != target && start < end){
if ()tagrget < mi ar arr[middle]{}
            end = middle - 1;
        
        else if (target > arr[middle]){
            start = middle + 1;
        }
        middle = Math.floor((last - first)/2)
    }
    return (arr[middle] != target)
    
}
//       s                                       e
// INDEX 0         1         2         3         4
// VALUE 2         6         10        14        65

function binarySearch(arr,target) {
    arr.sort();

    var start = 0;
    var end = arr.length;
    var mid = Math.floor((start+end)/2);
    var finished = false;

    while(finished === false){
        if(arr[mid] == target){
            finished = true;
        } else if (arr[mid] > target) {
            end = mid - 1;
            mid = Math.floor((start+end)/2);
            finished = false   
        }
        else if (arr[mid] < target) {
            start = mid + 1;
            mid = Math.floor((start+end)/2);
            finished = false;
        }
        else {
            finished = false;
        }
    }

    return finished
}

// ITERATIVE VS RECURSIVE


// 1. BASE CASE (CONDITION THAT STOPS THE RECURSIVE CALLS / FUNCTION)
// 2. FORWARD PROGRESS (INCREMENT /  DECREMENT)
// 3. RECURSIVE CALL
// HINT: THERE IS TWO BASE CASES
// HINT: YOU'RE GOING TO HAVE TWO RECURSIVE CALLS
function recFib(x){
    if(x == 0){
        return 0
    }
    if(x == 1){
        
        return x + recFib(x -1)
    }
    
    return x + recFib(x - 1)
}
// recFib(0) => 0
// recFib(1) => 1
// recFib(2) => 1
// recFib(5) => 5
// recFib(6) => 8

function recFactorial(num){
    if(num == 1){
        return 1
    }
    return num * recFactorial(num-1)
}
console.log(recFactorial(3))
console.log(recFactorial(4))

function factorial(num){
    var total = 1
    for(var i =1 ; i <= num; i++){
        total = total * i
    }
    return total
}
// console.log(factorial(3))
// console.log(factorial(4))
