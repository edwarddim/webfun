// DRY - DON'T REPEAT YOURSELF

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

function print1to50(){
    for(var i = 1; i < 51; i++){
        console.log(i)
    }
}
print1to50()

// DEFINE FUNCTION
function concat(arr1, arr2){
    var result = []
    for(var i = 0; i < arr1.length;i++){
        result.push(arr1[i])
    }
    for(var j = 0; j < arr2.length;j++){
        result.push(arr2[j])
    }
    return result
}
// CALLING(EXECUTING) THE FUNCTION
var answer1 = concat( [1,2,3] , ["b", "c"] )
console.log(answer1)

console.log( concat( ["c", "d"] , [4,5,6] ) )
concat(arrA1, arrB1)


function test(num){
    if(num < 5){
        return "Hello"
    }
    else if(num == 7){
        return "Lucky"
    }
    else{
        return "Nothing"
    }
}
console.log(test(9))
console.log(test(5))
console.log(test(2))
