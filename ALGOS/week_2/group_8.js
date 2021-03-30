//* Given an array, reverse it's items in place return the array after reversing it You can create a new array. HINT: ITERATE THROUGH ORIGINAL ARRAY IN REVERSE CHALLENGE: Do it in place without using any built in methods */

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

function reverseArr(items) {
    var reverse = [];
    for(var i = items.length - 1; i >= 0; i--) {
      var el = items[i];
      reverse.push(el);
    }
    return reverse;
}

console.log(reverseArr(arr1))

function reverseArr (arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        var el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    // var el = arr[arr.length - 1];
    // arr[0] = el;
    return arr;
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
}