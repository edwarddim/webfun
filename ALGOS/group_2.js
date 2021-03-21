// ITERATIVE VS RECURSIVE


// 1. BASE CASE (CONDITION THAT STOPS THE RECURSIVE CALLS / FUNCTION)
// 2. FORWARD PROGRESS (INCREMENT /  DECREMENT)
// 3. RECURSIVE CALL
// HINT: THERE IS TWO BASE CASES
// HINT: YOU'RE GOING TO HAVE TWO RECURSIVE CALLS
function recFib(x){
    if (x === 1) {
        return 1;
    }
    if (x === 0) {
        return 0;
    }
    return recFib(x-1) + recFib(x-2);
}

console.log(recFib(6));
// recFib(0) => 0
// recFib(1) => 1
// recFib(2) => 1
// recFib(5) => 5
// recFib(6) => 8

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
