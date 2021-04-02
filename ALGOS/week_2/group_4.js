

/*****************************************************************************/
/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
  */
    
    onst arr1 = ["a", "b", "c", "d", "e"];
    onst removeIdx1 = 1;
      nst expected1 = "b";
    / after function call, arr1 should be:
    onst arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

function removeAt(items, idx) {
  if(idx<0||idx>items.length-1){
    return null;
  }
  else{
    var x=items[idx];
    for(var i=idx;i<items.length;i++){
      items[i]=items[i+1];
    }
    items.length=items.length-1
  }
  console.log(items);
  return x;
}

console.log(removeAt([1,2,3,4,5], 3))

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
  var min=nums[0]
  var index=0;
  for(i=1;i<nums.length;i++){
    if(nums[i]<min){
      min=nums[i];
      index=i;
    }
  }
  if(index>0){
    for(i=nums.length;i>0;i--){
      nums[i]=nums[i-1];
    }
    for(i=index+1;i<nums.length;i++){
      nums[i]=nums[i+1]
    }
    nums.length -= 1;
    nums[0]=min
  }
  return nums
}
console.log(minToFront([5,1,0,2,3,0]))

[5,1,0,2,3,0]   // Starting array
[5,5,1,0,2,3,0] // After 2nd for loop
[5,5,1,2,3,0,0] // After 3rd for loop
[5,5,1,2,3,0]   // After nums.length -= 1
[0,5,1,2,3,0]   // After nums[0]=min

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
/*****************************************************************************/


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

const twoDimArr2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

function flatten2dArray(twoDimArr) {
// code here
  var newArr = [];
  for(var i = 0; i < twoDimArr.length; i++){
    newArr = newArr.concat(twoDimArr[i]);
  }
  return newArr;
}
console.log(flatten2dArray(twoDimArr1));
console.log(flatten2dArray(twoDimArr2));
console.log(flatten2dArray(twoDimArr3));
console.log(flatten2dArray([[0,0,1],[2,3,3],[4,4,5],5,7,9,15,21]));


/*****************************************************************************/