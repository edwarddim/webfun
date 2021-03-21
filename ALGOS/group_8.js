// TUESDAY
// Given an array and a number, add the number to the front of the array
// DO THIS WITH ONLY PUSH
function pushFront(arr, num){
    newArr = [];
    newArr.push(num);
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
pushFront([1,2,3,4,5], 9);
// [1,2,3,4,5] , 9 => [9,1,2,3,4,5]

// Given an array, remove the first number from array.
// DO THIS WITH ONLY POP
function popFront(arr){
    newArr = [];
    for(var i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
popFront([1,2,3,4,5]);
// [1,2,3,4,5] => [2,3,4,5]