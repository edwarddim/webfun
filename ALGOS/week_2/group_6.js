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

function combineArray(arr1, arr2){
    for(i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    console.log(arr1);
}

combineArray(["a", "b"],[1, 2, 3])



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

function smallestIndex(arr){
    var smallestNo=arr[0];
    var smallestIndex=-1;
    for(i=0;i<arr.length;i++){
        if(smallestNo>arr[i]){
            smallestNo=arr[i];
            smallestIndex=i;
        }
    }
    return smallestIndex
}
console.log(smallestIndex([5,4,2,2,3]))

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

function duplicateArray(arr){
    newArray=[];
    for(i=0;i<arr.length;i++){
        newArray.push(arr[i]);
    }
    for(i=0;i<arr.length;i++){
        newArray.push(arr[i]);
    }
    console.log(newArray);
}

duplicateArray(["a", "b", "c"])



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

consit arr4 = [];
const expected4 = [];

function reverseArr(items) {
    var newItems = [];
    for (var i=items.length-1; i>=0; i--){
        newItems.push(items[i]);
    }
    return newItems;
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
    var newArr = [];

}

/**************************** ******* ******* ******* ******* */

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
  // code here
  for (var i = items.length; i > 0; i--){
    items[i] = items[i-1]
  }
  items[0] = newItem
  console.log(items)
  return items.length
}
console.log(unshift(arr1, 0))

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
  // code here
  var toBeDeleted = items[0]
  for (var i = 1; i < items.length; i++){
    items[i-1] = items[i]
  }
  items.pop()
  return toBeDeleted
}


