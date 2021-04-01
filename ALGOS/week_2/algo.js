//* Given an array, reverse it's items in place return the array after reversing it You can create a new array. HINT: ITERATE THROUGH ORIGINAL ARRAY IN REVERSE CHALLENGE: Do it in place without using any built in methods */

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

function removeAt(items, idx) {
if (idx<0 || idx>items.length-1) {
	return null}
	var val=items[idx]
	for (var i=idx; i<item.lenght; i++){
		items[i]=items[i-1]
	}
	return val;const arr3 = ["a"];
}
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

function reverseArr(items) {
// code here
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
// code here
}/* 
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

// var result = []
// for(var i = 0; i < arrA1.length;i++){
//     result.push(arrA1[i])
// }
// for(var j = 0; j < arrB1.length;j++){
//     result.push(arrB1[j])
// }



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

// var minVal = nums1[0]
// var minIndx = -1
// for(var i = 1; i < nums1.length; i++){
//     if(nums1[i] < minVal){
//         minVal = nums1[i]
//         minIndx = i
//     }
// }




/* 
  From zoom interview with student in year 2020
  Given one array,
  create a new array that contains all of the original items duplicated twice
*/

// const arr1 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

// const arr2 = ["a"];
// const expected2 = ["a", "a"];

// const arr3 = [];
// const expected3 = [];

// // CREATE A VARIABLE FOR NEW ARRAY
// var result = []
// // CREATE A FOR LOOP THAT ITERATES TWICE
// for(var i =0; i < 2; i++){
//     // ITERATE THROUGH THE ARRAY
//     for(var j = 0; j < arr1.length; j++){
//         result.push(arr1[j])
//     }
// }



  

/*****************************************************************************/
/* 
  Given an array, reverse it's items in place
  return the array after reversing it
  You can create a new array. HINT: ITERATE THROUGH ORIGINAL ARRAY IN REVERSE
  CHALLENGE: Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

function reverseArr(items) {
  // CREATE AN EMPTY ARRAY
  var newArr = []
  // ITERATE THROUGH THE ARRAY IN REVERSE
  for(var i = items.length - 1; i >=0; i--){
    // PUSH THE ELEMENTS INTO THE NEW ARRAY
    newArr.push(items[i])
  }
  return newArr
}
function reverseArr(items) {
  for(var i = 0; i < Math.floor(items.length / 2); i++){
    var temp = items[i]
    items[i] = items[items.length - 1 - i]
    items[items.length - 1 - i] = temp
  }
  return items
}
console.log(reverseArr(["a", "b", "c", "d", "e"]))

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
  // code here
  // CHECK TO SEE IF THE INDEX MAKE SENSE
  if(startIdx < 0){
    startIdx = 0
  }
  if(endIdx > items.length){
    endIdx = items.length
  }
  var result = []
  // ITERATE THROUGH ITEMS FROM STARTIDX TO ENDIDX
  for(var i = startIdx; i < endIdx; i++){
    // PUSH THE NUMBERS TO RESULT
    result.push(items[i])
  }
  return result
}



/*****************************************************************************/
/* 
  Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
  // ITERATING THROUGH THE ARRAY BACKWARDS
  for(var i = items.length - 1; i >= 0; i--){
    items[i+1] = items[i]
  }
  items[0] = newItem
  return items.length
}

/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.
  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const arr1Expected = [2, 3];

const arr2 = ["a", "b", "c", "d"];
const expected2 = "a";
// after running function arr2 should now be:
const arr2Expected = ["b", "c", "d"];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  var temp = items[0]
  for(var i = 1; i < items.length; i++){
    items[i-1] = items[i]
  }

  items.length = items.length - 1
  return temp
}

/*****************************************************************************/
/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

function removeAt(items, idx) {
  if( idx < 0 || idx >= items.length){
    return null
  }
  var removed_value = items[idx]

  for(var i = idx; i < items.length - 1; i++){
    arr[i] = arr[i+1]
  }
  // items.length = items.length - 1
  items.pop()
  return removed_value
}

/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.
  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

function minToFront(nums) {
  // FIND THE MINIMUM NUMBER AND THE INDEX OF THE MINUMIUM NUMBER
  var minIdx = 0
  var minVal = nums[0]
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < minVal){
      minVal = nums[i]
      minIdx = i
    }
  }
  // SLIDE OVER VALUES FROM FRONT TO WHERE THE MIN INDEXD IS
  for( var i = minIdx; i >= 1; i--){
    nums[i] = nums[i-1]
  }
  nums[0] = minVal
  return nums
}

/*****************************************************************************/


/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

function flatten2dArray(twoDimArr) {
// code here
}


/*****************************************************************************/
