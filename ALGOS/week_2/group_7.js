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


var arrA1 = ["a","b"];
var arrB1 = [1, 2, 3];
var expected =arrB1.concat(arrA1);
console.log(expected)


for (i=0; i < length(arrA1)-1; i++) {
    arrB2.push(arrA1[i]);
}
console.log(arrB2)


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


