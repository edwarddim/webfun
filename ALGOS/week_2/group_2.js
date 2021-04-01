/* 
  Array: Concat
  .push allowed: arrName.push(newItem)
  Replicate JavaScript’s concat() which combines two arrays into one NEW array
  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];      //var new_array = arrA1.concat(arrB1);
                                            //console.log(new_array)



const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];      //var new_array2 = arrA2.concat(arrB2)
                                            //console.log(new_array2)






/* 
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;                        //

const nums2 = [5, 4, 2, 2, 3];
const expected2 = 2;

const nums3 = [];
const expected3 = -1;


/* 
  From zoom interview with student in year 2020
  Given one array,
  create a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];   //var new_array = arr1.concat(arr1);
                                                    //console.log(new_array)
const arr2 = ["a"];
const expected2 = ["a", "a"];                       // var new_array2 = arr1.concat(arr1);
                                                    //console.log(new_array2)
const arr3 = [];                                    //new_array3= arr3.concat(arr3)
const expected3 = [];




/*****************************************************************************/
/* 
  Given an array, reverse it's items in place
  return the array after reversing it
  Do it in place without using any built in methods
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
  var temp = 0
  for (var i = 0; i < items.length/2 ;i++){
    temp = items[i]
    items[i] = items[items.length-i-1]
    items[items.length-i-1] = temp
  }
  return items
}

console.log (reverseArr(arr1))
console.log (reverseArr(arr2))
console.log (reverseArr(arr3))
console.log (reverseArr(arr4))

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

//extra conditions, should take out of bounds indexes and make them the closest inbound index

function sliceArray(items, startIdx, endIdx) {
  if(items.length < endIdx){
    endIdx = items.length
  }
  if(startIdx < 0){
    startIdx = 0
  }
  var sliceArray= []
  for(var i = startIdx; i < endIdx; i++){
    sliceArray.push(items[i])
  }
  return sliceArray
}

console.log(sliceArray(arr1,startIdx1,endIdx1))
console.log(sliceArray(arr2,startIdx2,endIdx2))
console.log(sliceArray(arr3,startIdx3,endIdx3))
console.log(sliceArray(arr4,startIdx4,endIdx4))
console.log(sliceArray(arr5,startIdx5,endIdx5))
console.log(sliceArray(arr6,startIdx6,endIdx6))

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
  if (idx < items.length && idx >= 0){
    let idxVal = items[idx]
    for (let i = idx; i < items.length; i++){
      items[i] = items[i+1]
    }
    items.pop()
    console.log(items)
    return idxVal
  }
  else{
    return null
  }
}
console.log(removeAt(arr1, iremoveIdx1))
console.log(removeAt(arr2, iremoveIdx2))
console.log(removeAt(arr3, iremoveIdx3))


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

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
 function minToFront(nums) {
  var smallestIndex = 0
  for(let i = 0; i < nums.length;i++){      //standard loop
    if(nums[i] < nums[smallestIndex]){      // check if value at current index is smaller than stored index
      smallestIndex = i                     //store new index if so
    }
  }
  var smallestNumber = nums[smallestIndex]  //save the value at smallestIndex (will be overwritten)
  for(let j=smallestIndex; j > 0 ;j--){     //iterate through array, starting at smallestIndex (to be overwritten)
    nums[j]= nums[j-1]                      //overwrite current index with earlier index to bump list forward
  }
  nums[0] = smallestNumber                  //set lowest index to lowest number
  return nums                               //return array
}

console.log(minToFront(nums1))
console.log(minToFront(nums2))
console.log(minToFront(nums3))



/*****************************************************************************/
/* 
  Array: Second-Largest
  Return the second-largest element of an array, or null if there is none.
  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

function secondLargest(nums) {
  // code here
}

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
/*****************************************************************************/
/*****************************************************************************/
