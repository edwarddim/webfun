onst arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];y

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];

function concatArrays(arr1, arr2){
    expected = arrA1.concat(arrB1);
    return expected;
}

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];

function concatArr(arr1, arr2) {
  expected = [];
  for (var i=0; i<arr1.length; i++){
    expected[i]=arr1[i];
  }
  for (var i=0; i<arr2.length; i++){
    expected[i+arr1.lenghth]=arr2[i];
  }
  return expected;
}

console.log(concatArr(arrA2,ArrB2));