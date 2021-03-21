// DEFINING A FUNCTION
function biggieSize(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0 ){
            arr[i] = "big"
        }
    }
    console.log(arr)
}
// CALLING(EXECUTING) A FUNCTION
biggieSize([-1,3,5,-5])



//------------------------------------------------------ //
function printLowReturnHigh(arr){
    var min = arr[0]
    var max = arr[0]
    for(var i = 1; i < arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min ){
            min = arr[i]
        }
    }
    console.log(min)
    return max
}
// console.log("FUNCTION CALL: ", printLowReturnHigh([4,3,8,1,56]))
//------------------------------------------------------ //

function printOneReturnAnther(arr){
    console.log(arr[arr.length-2])
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1 ){
            return arr[i]
        }
    }
}
// console.log(printOneReturnAnther([2,2,3,4,5,6]))
//------------------------------------------------------ //

function doubleVis(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2)
    }
    console.log(newArr)
    return newArr
}
// doubleVis([1,2,3,4])
//------------------------------------------------------ //

function countPositives(arr){
    var count = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > -1 ){
            count++
        }
    }
    arr[arr.length-1] = count
    console.log(arr)
}
// countPositives([1,2,-1,3,-4,0,2,2,2,2,2,2,-1,-1,-1,-1])
//------------------------------------------------------ //
function evenOdd(arr){
    var even = 0;
    var odd = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2== 0){
            even++
            odd = 0
            if(even == 3){
                console.log("EVEN MORE SO")
                even = 0;
            }
        }
        else{
            odd++
            even = 0
            if(odd == 3){
                console.log("THAT'S ODD")
                odd = 0
            }
        }
    }
}
// evenOdd([1,1,1,2,3,5])
// evenOdd([2,2,2,3,2,2,1,1,1])
// evenOdd([1,2,3,4,5,6,7])
//------------------------------------------------------ //

function increment(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1
    }
    console.log(arr)
}
// increment([1,1,1,1,1,1,1,1])
//------------------------------------------------------ //

function previousLength(arr){
    for(var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length
    }
    console.log(arr)
}
// previousLength(["hello", "dojo", "awesome","tomatoes", "remote"])

//------------------------------------------------------ //

function addSeven(arr){
    var newArr = []
    for(var i =0; i < arr.length; i++){
        newArr.push(arr[i] + 7)
    }
    console.log(newArr)
    return newArr
}
// addSeven([1,1,1,1,1])

//------------------------------------------------------ //

function reverse(arr){
    for(var i =0; i < (arr.length-1)/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    console.log(arr)
}
// reverse([1,2,3,4,5])

//------------------------------------------------------ //

function outlook(arr){
    for(var i =0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1
        }
    }
    console.log(arr)
}
// outlook([1,-3,5])
//------------------------------------------------------ //
function alwaysHungry(arr){
    var check = 0
    for(var i =0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log('YUMMY')
            check++
        }
    }
    if(check === 0){
        console.log("I'M HUNGRY")
    }
}
// alwaysHungry(["food", "not", "not", "food"])
// alwaysHungry(["not", "not", "not", "not"])
//------------------------------------------------------ //

function swapToward(arr){
    var temp = arr[0]
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = temp

    temp = arr[2]
    arr[2] = arr[arr.length-3]
    arr[arr.length-3] = temp
    console.log(arr)
}
// swapToward([true,42,"Ada",2,"pizza"])
// swapToward([1,2,3,4,5,6,7,8,9,10])
//------------------------------------------------------ //

function scaleArr(arr, num){
    for(var i=0; i < arr.length; i++){
        arr[i] = arr[i] * num
    }
    console.log(arr)
    return arr
}
scaleArr([1,2,3,4,5,6] , 10)