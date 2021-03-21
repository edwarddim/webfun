

function reverseArr(arr) {
    var temp = [];
    for (var x = arr.length-1; x >= 0; x--) {
        temp.push(arr[x])
    }
    return temp
}

var output = reverseArr([1, 2, 3, 4, 5, 6, 7]);
console.log("Expected:[7,6,5,4,3,2,1]", output)

function reverseArr(arr) {
    for (var x = 0; x < (arr.length-1) / 2; x++) {
        var temp = arr[x]
        arr[x] = arr[arr.length-1-x]
        arr[arr.length-1-x] = temp
    }
    return arr
}

var output = reverseArr([1, 2, 3, 4, 5, 6, 7]);
console.log("Expected:[7,6,5,4,3,2,1]", output)


function moveZero(arr) {
    for (var i=0; i<arr.length; i++){
      if (arr[i]==0){
        arr.push(arr[i])
        arr.splice(i, 1)
      }
    }
  }


// TUESDAY
// Given an array and a number, add the number to the front of the array
// DO THIS WITH ONLY PUSH
-
// New Array Method
function pushFront(arr, num) {
  var newArr = []
  newArr.push(num)
  for (var i=1;i<arr.length + 1;i++){
  newArr.push(i)
  }
  return newArr
}

var output = pushFront([1,2,3,4,5], 9) // => [9,1,2,3,4,5]
console.log(output)

// Reverse Array Method
function pushFront(arr, num){
  for (var i=0;i<(arr.length - 1) / 2;i++) {
  var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  arr.push(num)
  for (var i=0;i<(arr.length - 1) / 2;i++) {
  var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr  
}

var output = pushFront([1,2,3,4,5], 9) // => [2,3,4,5]
console.log(output)

function pushFront(arr, num){
  
}
// [1,2,3,4,5] , 9 => [9,1,2,3,4,5]


// Given an array, remove the first number from array.
// DO THIS WITH ONLY POP

// New Array Method
function popFront(arr){
       var newArr = arr[arr.length - 4]
    }
    var output = popFront([1,2,3,4,5]) // => [2,3,4,5]
    console.log(output)

    for (var i=arr.length - 4;i)

    var newArr = [arr[(arr.length - 4) + (arr.length -3)]]
    // [1,2,3,4,5] => [2,3,4,5]


// Reverse Array method
    function popFront(arr){
      for (var i=0;i<(arr.length - 1) / 2;i++) {
      var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
      }
      arr.pop()
      for (var i=0;i<(arr.length - 1) / 2;i++) {
      var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
      }
      return arr  
  }
  //
  function removeFromFront(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
    }
    arr.pop();
    return arr;
}

console.log(removeFromFront([1,2,3,4,5]));
//
  var output = popFront([1,2,3,4,5]) // => [2,3,4,5]
  console.log(output)

    // [5,4,3,2,1] =>pop it => [2,3,4,5]
    // [1,2,3,4,5] => [2,3,4,5]
    
    function TwoNumSum (){
      var newArr = [];
      var sum = 0;
      for (var i = 0; i < arr.length; i ++){
          for (var j = 1; j < arr.length; j ++){
            if (j >= i){
              newArr.push(sum)
            }
          }
      }
  }

function twoNumSum(arr) {
  var newArr = []
  var sum = 0
  for (var i = 1;i<arr.length;i++) {
    for (var j = i;j<arr.length;j++) {
      sum = j + i
      newArr.push(sum)
    }
  }
  return newArr
}


function twoNumSum(arr) {
  var newArr = []
  var sum = 0
  for (var i=1;i<arr.length + 1;i++){
    for (var j = i;j<arr.length + 1;j++){
      sum = j + i
      newArr.push(sum)
      }
    } 
  return newArr
}

var output = twoNumSum([1,2,3,4]) //=> [2,3,4,5,4,5,6,6,7,8]
console.log(output)
// [1,2,3,4,5] => [2,3,4,5,4,5,6,6,7,8]
// 1+1 = 2
// 1+2
// 1+3
// 1+4
// 1+5
// 2+3 
// 2+4
// 2+5
// 3+4
// 3+5


function binarySearch(arr, target){

}
// [1,2,3,4,5,6],5 => TRUE
// [1,2,3,4,5,6],9 => FALSE

// 1. STORE START AND END INDEX INSIDE VARIABLES
// 2. DETERMINE MIDDLE OF THE THE START AND END
// 3. CHECK TO SEE IF MIDDLE NUMBER IS THE TARGET VALUE, IF MIDDLE IS TARGET RETURN TRUE
// 4. IF NOT, EVALUATE WHICH SIDE OF THE ARRAY YOU WANT TO SEARCH AND MOVE THE START OR END TO CORRECT POSITION

// IF THE START INDEX IS GREATER THAN THE END INDEX, THE NUMBER DOES NOT EXIST IN ARRAY RETURN FALSE
// START AND END SHOULD BE INDEXES
function binarySearch(arr, target){
  var start = arr[0]; //0
  var end = arr[arr.length - 1];
  var middle = arr[arr.length / 2];
  while (start < end){
    if (middle == target) {
      return true;
    } else if (start > end){
      return false;
    }
    if (target > middle){
      start = middle;
    } else {
      end = middle;
    }
  }
}


  start = middle + 1
  end = middle - 1 


// [1,2,3,4,5,6],5 => TRUE
// [1,2,3,4,5,6],9 => FALSE





