//Here is where we make the buttons actually work//
const output = document.querySelector('#output');
const digits = document.querySelectorAll('button');
const eqLine = document.querySelector('#eqLine');
let operator = '';
let firstArg = '';
let secondArg = '';
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
    else(return "Hey, you can't divide by 0!")
}


//Define the inputs//
function firstArgOps(input){
    if (input == 'back'){
        firstArg = firstArg.split('');
        firstArg.pop();
        firstArg = firstArg.join('');
        output.textContent = firstArg;
        return;
    }
    }
    firstArg += input;
    output.textContent += input;
}

function secondArgOps(input){
    if (secondArg == '' && output.textContent != ''){
        output.textContent = '';
    }
    secondArg += input;
    output.textContent += input;
}


//Making the buttons work.//
const enter = document.querySelector('#enter');
enter.addEventListener('click', function(){
    if(secondArg == ''){
        output.textContent = firstArg;
    }
    else{
        console.log(`first:${firstArg} second:${secondArg} ${operator}`);
        output.textContent = (`Answer: ${operate(operator, parseFloat(firstArg), parseFloat(secondArg))}`);
        eqLine.textContent = (`${firstArg} ${operator} ${secondArg} =`);
        firstArg = operate(operator, parseFloat(firstArg), parseFloat(secondArg));
        secondArg = '';
        operator='';
    }
    boundsCheck();
});
const operations = document.querySelectorAll('.operation');
operations.forEach(operation =>{
        operation.addEventListener('click', function(){
        console.log('yep');
        if (firstArg != '' && secondArg != ''){
            output.textContent = '';
            console.log('yep again');
            output.textContent = (`${operate(operator, parseFloat(firstArg), parseFloat(secondArg))}`);
            eqLine.textContent = (`${firstArg} ${operator} ${secondArg} =`);
            firstArg = operate(operator, parseFloat(firstArg), parseFloat(secondArg));
            secondArg = '';
            operator = operation.textContent;

        }
    });
});
function clearAll(){
    output.textContent = '';
    firstArg= '';
    operator='';
    secondArg='';
    eqLine.textContent='';
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    clearAll();
});

//Let's get into the actual project. Here is the operate function to take the numbers and operator.//
const operate = function(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
}}
