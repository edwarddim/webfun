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
  var newArr=[newItem];
  for(var i=0;i<items.length;i++){
    newArr.push(items[i]);
  }
  items=newArr;
  console.log(items);
  return items.length;
}
console.log(unshift([1,2,3],0));

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
  var firstValueItems=items[0];
  for(var i=1;i<items.length;i++){
    newArr.push(items[i]);
  }
  items=newArr;
  console.log(items);
  return firstValueItems;  
}
console.log(shift([1,2,3]));

// **************

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
  if (idx >= items.length - 1 || idx < 0 ){
    return null
  }
  var removedNum = items[idx]
  for (var i = idx; i < items.length; i++){
    items[i] = items[i+1]
  }
  items.pop()
  // console.log(items)
  return removedNum
}
console.log(removeAt( ["a", "b", "c", "d", "e"], 1)) //b
console.log(removeAt( ["a", "b", "c", "d", "e"], -3)) //null
console.log(removeAt( ["a", "b", "c"], 3)) //null

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
  var minVal = nums[0]
  var temp = null
  // find the min value
  for (var i = 1; i < nums.length; i++){
    if (nums[i] < minVal){
      minVal = nums[i]
    }
  }
  for (var j = nums.length - 1; j > 0; j--){
    if (nums[j] == minVal){
      temp = nums[j]
      nums[j] = nums[j-1]
      nums[j-1] = temp
    }
  }
  return nums
}
console.log(minToFront([6, 4, 5, 1, 3, 2]))