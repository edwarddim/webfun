 for (var i = 1; i < items.length; i++){
    items[i-1] = items[i]
  }
  items.pop()
  return toBeDeleted
}




* 
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
      if (idx<0 || idx>items.length-1) {
      return null}
      var val=items[idx];
      for (var i = idx; i<item.lenght; i++){
        items[i]=items[i-1];
      }
      items.pop();
      return val;
}
removeAt(["a", "b", "c", "d", "e"],1)

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
  var min = nums[0];
  for (i=1; i<nums.lenght; i++){
    if (nums[i]<min) {
      min = nums[i];
    }
  }
  var temp = nums[0];
  nums[0] = min;
  nums[ind] = temp;
  for (i=1; i<nums.lenght-1; i++){
    nums[i]=nums[i+1];
  }
  return nums;
}


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
  var newArr=[];
  for(i=0;i<twoDimArr.length;i++){
    for(j=0;j<twoDimArr[i].length;j++){
      if(twoDimArr[i].length==0){
        continue
      }
      else{
        newArr.push(twoDimArr[i][j]);
      }
    }    
  }
  return newArr;
}
console.log(flatten2dArray([[], 2, [10, 20]]))

// BELOW FOR CHALLENGE

function flatten2dArray(twoDimArr) {
  var newArr=[];
  for(i=0;i<twoDimArr.length;i++){
    if(Array.isArray(twoDimArr[i])){
      for(j=0;j<twoDimArr[i].length;j++){
        if(twoDimArr[i].length==0){
          continue
        }
        else{
          newArr.push(twoDimArr[i][j]);
        }
      }
    }
    else{
      newArr.push(twoDimArr[i]);
    }
  }
  return newArr;
}
console.log(flatten2dArray([[], 2, "dog", [10, 20]]))







//Message #🏫cohort-edward


