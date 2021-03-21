// IF THE START INDEX IS GREATER THAN THE END INDEX, THE NUMBER DOES NOT EXIST IN ARRAY RETURN FALSE
function binarySearch(arr, target){
  var start = 0;
  var end = arr.length - 1;
  if (arr[start] > target || arr[end] < target) {
    return false;
  }
  while (start <= end) {
    var mid = Math.floor((end + start) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}
// [1,2,3,4,5,6],5 => TRUE
// [1,2,3,4,5,6],9 => FALSE

console.log(binarySearch([1,2,3,4,5,6], 6)); // true
console.log(binarySearch([1,2,3,4,5,6], 9)); // false
console.log(binarySearch([1,2,3,4,5,6,7], 3)); // true
// TRY DECREMENTING
function recFib(num) { // what exactly are we trying to find? Number in the sequence? How many times toget there?
  // if (num <= 1){
  //   return 1;
  // }
  
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  } 
  return recFib(num - 1) + recFib(num - 2)
}

console.log(recFib(3))

// fib3 = 2
// fib sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// 3 - 1, 2 - 1 =  1
// 

function recFib(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  } 
  return recFib(num - 1) + recFib(num - 2)
}
console.log(recFib(3))

// fib sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]