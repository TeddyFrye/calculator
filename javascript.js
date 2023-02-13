//Here are the functions for the actual number operations.//
const add = function(a,b) {
    return a+b;
   };

const subtract = function(a,b) {
    return a-b
   };
   
   
const multiply = function(a,b) {
    return a*b
   }

const divide = function(a,b){
    if (b !=0)
        {return a/b}
}
//Let's get into the actual project. Here is the operate function to take the numbers and operator.//
const operate = function(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
}}
   
