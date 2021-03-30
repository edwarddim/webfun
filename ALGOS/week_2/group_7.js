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