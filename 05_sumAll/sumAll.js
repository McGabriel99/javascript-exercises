const sumAll = function(num1, num2) {
    //base case if num1 or num2 is negative or not a number
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    //base case if num1 equals num2
    if (num1 === num2) {
        return num1;
    }
    //recursive case
    if (num1 < num2){
        return num1 + sumAll(num1 + 1, num2);
    }
    if (num1 > num2){
        return num1 + sumAll(num1 - 1, num2);
    }
    
    //greedy case
    let sum = 0;
    if (num1 < num2){
        for(let i = num1; i <= num2; i++){
            sum += i;
        }
    }
    if (num1 > num2){
        for(let i = num2; i <= num1; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
