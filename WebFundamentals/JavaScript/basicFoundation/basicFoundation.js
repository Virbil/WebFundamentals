// 1. Get 1 to 255
function numsThru255() {
    var arr = [];

    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(numsThru255());

// 2. Get sum of all evens thru 1000
function sumEvensThru1000() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumEvensThru1000());

// 3. Get sum of all odds thru 5000
function sumOddThru5000() {
    var sum = 0;
    for (var i = 1; i < 5001; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOddThru5000());

// 4. Iterate an arry to get sum
function sumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(sumArray([1,2,5]));
console.log(sumArray([-5,2,5,12]));

// 5. Find max element within array
function maxElem(x) {
    var max = x[0];

    for(var i = 0; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
}
console.log(maxElem([-3,3,5,7]));

// 6. Find average of an array
function avgArr(x) {
    var avgValue = 0;
    var sum = 0;

    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }

    avgValue = sum / x.length;
    return avgValue;
}
console.log(avgArr([1,3,5,7,20]));

// 7. Odd Arry 1 - 50
function oddArrThru50() {
    var arr = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddArrThru50());

// 8. Given Y, find how many values are greater than Y
function greaterThanY(x, Y) {
    var count = 0;

    for (var i = 0; i < x.length; i++) {
        if (x[i] > Y) {
            count++;
        }
    }
    return count;
}
console.log(greaterThanY([1, 3, 5, 7], 3));

// 9. Square array elements
function squareElem(x) {
    var sqArr = [];

    for (var i = 0; i < x.length; i++) {
        sqArr.push(x[i]*x[i]);
    }
    return sqArr;
}
console.log(squareElem([1,5,10,-2]));

// 10. Remove negatives
function removeNegs(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x;
}
console.log(removeNegs([1,5,10,-2]));

// 11. Max/Min/Avg
function stats(x) {
    var max = x[0];
    var min = x[0];
    var avg = 0;
    var sum = 0;
    var statsArr = [];

    for (var i = 0; i < x.length; i++) { 
        if (x[i] > max) {
            max = x[i];
        }
        if (x[i] < min) {
            min = x[i];
        }

        sum += x[i];
    }

    avg = sum / x.length;
    statsArr.push(max);
    statsArr.push(min);
    statsArr.push(avg);
    return statsArr;
}
console.log(stats([1,5,10,-2]));

// 12. Swap Values
function swapValues(x) {
    var temp = x[x.length - 1];
    x[x.length - 1] = x[0];
    x[0] = temp;
	
    return x;
}
console.log(swapValues([1,5,10,-2]));

// 13. Replace negs with string
function negsToString(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
    return x;
}
console.log(negsToString([-1,-3,2]));