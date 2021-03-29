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


/*code*/
function concatArray(arr1, arr2){
  var outPut = []
  for (var i = 0; i <arr1.length; i++){
    outPut.push(arr1[i])
  }
  for (var i = 0; i <arr2.length; i++){
    outPut.push(arr2[i])
  }
  return outPut
}
console.log(concatArray(arrA1, arrB1))

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

const nums4 = [5, 1, 2, 3,];

/*code*/
function locateSmallest(arr){
  var smallIndex = 0
  var smallest = arr[0]
  if (arr.length != 0){
    for (var i = 1; i < arr.length; i++){
      if (arr[i] < smallest){
        smallIndex = i
        smallest = arr[i]
      }
    }
  }
  else{
    smallIndex = -1
  }
  return smallIndex
}
console.log(locateSmallest(nums1))
console.log(locateSmallest(nums2))
console.log(locateSmallest(nums3))
console.log(locateSmallest(nums4))

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

/*code*/
function duplicateArray(arr){
  var outPut = []
  for (var i = 0; i < 2; i++){
    for (var j = 0; j < arr.length; j++){
      outPut.push(arr[j])
    }
  }
  return outPut
}
console.log(duplicateArray(arr1))
console.log(duplicateArray(arr2))
console.log(duplicateArray(arr2))3