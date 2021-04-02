3//* Given an array, reverse it's items in place return the array after reversing it You can create a new array.
// HINT: ITERATE THROUGH ORIGINAL ARRAY IN REVERSE CHALLENGE: Do it in place without using any built in methods */

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

function reverseArr(items) {
  // code here
    for(var i=0; i < items.length/2; i++){
      var temp = items[i];
      items[i] = items[items.length-1-i];
      items[items.length-1-i] = temp;
    }
    console.log(items);
}
reverseArr([1,2,3,4]);

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
  var newArr = [];
  for(var i=startIdx; i<endIdx; i++){
    if(i<0){
      i = 0;
    }
    newArr.push(items[i]);
  }
  console.log(newArr);
}
slice([1,2,3,4,5,6],1,3);



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
  var number=items.length+newItem.length;
  return number;
}

function unshift(items, newItem){ 
  var newArr=[];
  newArr.push(newItem); 
  for(var i=0; i<items.length;i++){
    newArr.push(items[i]);
  }
  return newArr.length;
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
  var newArr=[];
  for(var i=1; i<items.length;i++){
    newArr.push(items[i]);
  }
  return items[0];
}

function shift(items){
  return items[0];
}
/*************/


/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order

  CHALLENGE: THE ARRAY MAY CONTAIN ARRAYS OR NUMBERS
  FIND BUILT IN FUNCTION THAT CHECKS IF AN ELEMENT IS AN ARRAY
*/

var challengeArr = [1,3,4,[5,6],7,8,[9]]
var challengeResult = [1,3,4,5,6,7,8,9]

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]]; // != [1,2,3]
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

function flatten2dArray(twoDimArr) {
  // code here
  var onedArr = [];
  for (var i = 0; i < twoDimArr.length; i++){
    if (Array.isArray(twoDimArr[i])){
      for (var j = 0; j < twoDimArr[i].length; j++){
        onedArr.push(twoDimArr[i][j])
      }
    }
    else{
      onedArr.push(twoDimArr[i])
    }
  }
  return onedArr
  }
