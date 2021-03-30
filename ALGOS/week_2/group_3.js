/* 
  Array: Concat
  .push allowed: arrName.push(newItem)
  Replicate JavaScript’s concat() which combines two arrays into one NEW array
  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];


/*code*/
function concatArray(arr1, arr2){
  var outPut = []
  for (var i = 0; i <arr1.length; i++){
    outPut.push(arr1[i])
  }
  for (var i = 0; i <arr2.length; i++){
    outPut.push(arr2[i])
  }
  return outPut
}
console.log(concatArray(arrA1, arrB1))

/* 
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;

const nums2 = [5, 4, 2, 2, 3];
const expected2 = 2;

const nums3 = [];
const expected3 = -1;

const nums4 = [5, 1, 2, 3,];

/*code*/
function locateSmallest(arr){
  var smallIndex = 0
  var smallest = arr[0]
  if (arr.length != 0){
    for (var i = 1; i < arr.length; i++){
      if (arr[i] < smallest){
        smallIndex = i
        smallest = arr[i]
      }
    }
  }
  else{
    smallIndex = -1
  }
  return smallIndex
}
console.log(locateSmallest(nums1))
console.log(locateSmallest(nums2))
console.log(locateSmallest(nums3))
console.log(locateSmallest(nums4))

/* 
  From zoom interview with student in year 2020
  Given one array,
  create a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

/*code*/
function duplicateArray(arr){
  var outPut = []
  for (var i = 0; i < 2; i++){
    for (var j = 0; j < arr.length; j++){
      outPut.push(arr[j])
    }
  }
  return outPut
}
console.log(duplicateArray(arr1))
console.log(duplicateArray(arr2))
console.log(duplicateArray(arr2))

/*****************************************************************************/
/* 
  Given an array, reverse it's items in place
  return the array after reversing it
  You can create a new array. HINT: ITERATE THROUGH ORIGINAL ARRAY IN REVERSE
  CHALLENGE: Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
console.log(reverseArr(arr1))
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
console.log(reverseArr(arr2))
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];
console.log(reverseArr(arr3))

const arr4 = [];
const expected4 = [];
console.log(reverseArr(arr4))

function reverseArr(items) {
  var reverseItem = []
  for (var i = items.length-1; i >= 0; i--){
    reverseItem.push(items[i])
  }
  return reverseItem
}

/* 
  Recreate the built in .slice method
  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)
  What should you do if the provided end index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
console.log(slice(arr1, startIdx1, endIdx1))
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

function slice(items, startIdx, endIdx) {
  var newItems = [];
  if (startIdx < 0){
    startIdx = 0
  }
  if (endIdx > items.length-1 ){
    endIdx = items.length
  }
  if (startIdx == endIdx){
    return []
  }
  for (var i = startIdx; i < endIdx; i++ ){
    newItems.push(items[i])
  }
  return newItems
}



/*****************************************************************************/