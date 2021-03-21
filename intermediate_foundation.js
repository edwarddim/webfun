function factorial(num){
    var total = 1;
    for(var i = 1; i <= num; i++){
        total *= i
    }    
    console.log("FACTORIAL OF", num, "IS: ", total)
}
// factorial(3)

function fib(num){
    var prevNum = 0
    var currentNum = 1
    var nextNum
    if(num == 0) return 0
    if(num == 1) return 1
    for(var i = 1; i < num; i++){
        nextNum = prevNum + currentNum
        prevNum = currentNum
        currentNum = nextNum
    }
    return nextNum
}
fib(1)
fib(2)
fib(3)
fib(4)
fib(5)

// 3 => 3 * 2 * 1
// 4 => 4 * 3 * 2 * 1