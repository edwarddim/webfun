function max_min_avg(arr){
    var min = arr[0]
    var max = arr[0]
    var total = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        total = total + arr[i]
    }
    console.log("MAX: ", max)
    console.log("MIN: ", min)
    console.log("AVG: ", total / arr.length)
}
// max_min_avg([1,2,3,4,5,6,7])
// console.log("--------------------")
// max_min_avg([-1,-66,3,56,0,12,-34])


function previous_length(arr){
    for(var i = arr.length-1; i > 0; i-- ){
        arr[i] = arr[i-1].length
    }
    console.log(arr)
}

// previous_length(['apple', 'tomaotes', 'cat', 'bananana'])
// => ["apple", 5, 8, 3]

function always_hungry(arr){
    var check = false
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'food'){
            check = true
            console.log("yummy")
        }
    }
    if(!check){
        console.log("i'm hungry")
    }
}
// always_hungry(['hello', 'food','food','bye'])
// console.log("--------------------")
// always_hungry(['hello', 'hello','hello','hello'])