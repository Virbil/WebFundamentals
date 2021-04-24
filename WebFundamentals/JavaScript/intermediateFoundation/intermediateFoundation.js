// Sigma - Implement function sigma(num) that, given a number, returns the sum of all 
// positive integers up to the given number (inclusive).  
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sum = 0;
    if (num < 0) {
        return 0;
    }
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sigma(6));



// Factorial - Write a function factorial(num) that, given a number, returns the product 
// (multiplication) of all positive integers from 1 up to the given number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var product = 0;
    if (num <= 0) {
        return 0;
    }
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
// console.log(factorial(3));




// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical 
// sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your 
// function should accept one argument, an index into the sequence (where 0 corresponds to the 
// initial value, 4 corresponds to the value four later, etc).  
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
function fibonacci(index) {
    // Method 1: recursion
    // if (index <= 1) {
    //     return index;
    // } else {
    //     return fibonacci(index-1) + fibonacci(index-2);
    // }

    // Method 2:
    var fibArr = [0, 1]; // array of starting values
    for(var i = 2; i <= index; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr[index];
}
// console.log(fibonacci(6));





// Array: Second-to-Last: Return the second-to-last element of an array. 
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length - 2];
    }
}
// console.log(secToLast([42, true, 4, "Liam", 7]));




// Array: Nth-to-Last: Return the element that is N-from-array's-end.  
// Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthToLast(arr, n) {
    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length - n];
    }
}
// console.log(nthToLast([5,2,3,6,4,9,7], 3));




// Array: Second-Largest: Return the second-largest element of an array. 
// Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secLargest(arr) {
    var max = arr[0];
    var index  = 0;

    // METHOD 2:  just sort arr: secMax = arr.sort(function(a, b){return a - b}); and index - 2(?)
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    arr.splice(index, 1);
    // var index = arr.indexOf(max);
    // if (index > -1) { // why index = -1?
    //     arr.splice(index, 1);
    // }

    var secMax = arr[0];
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] > secMax) {
            secMax = arr[k];
        }
    }

    return secMax;
}
// console.log(secLargest([42,1,4,3.14,7]));




// Double Trouble: Create a function that changes a given array to list each existing element twice, 
// retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleArr(arr) {
    // Method 1: creating second arr
    // var dblArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //     dblArr.push(arr[i]);
    //     dblArr.push(arr[i]);
    // }
    // return dblArr;

    // Method 2: actual solution w/o creating a new array
    for(var i = 0; i < arr.length; i+=2) {
        arr.splice(i, 0, arr[i]);
    }
    return arr;
}
// console.log(doubleArr([4, "Ulysses", 42, false]));