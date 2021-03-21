// ITERATIVE VS RECURSIVE


// 1. BASE CASE (CONDITION THAT STOPS THE RECURSIVE CALLS / FUNCTION)
// 2. FORWARD PROGRESS (INCREMENT /  DECREMENT)
// 3. RECURSIVE CALL

// HINT: THERE IS TWO BASE CASES
// HINT: YOU'RE GOING TO HAVE TWO RECURSIVE CALLS
function recFib(x){
    if(x ===0)return 0
    if(x ===1)return 1
    return recFib(x-1) + recFib(x-2)
}
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
    console.log(nextNum)
}


function recFactorial(num){
    if(num == 1){
        return 1
    }
    return num * recFactorial(num-1)
}
console.log(recFactorial(3))
console.log(recFactorial(4))

function factorial(num){
    var total = 1
    for(var i =1 ; i <= num; i++){
        total = total * i
    }
    return total
}
// console.log(factorial(3))
// console.log(factorial(4))
