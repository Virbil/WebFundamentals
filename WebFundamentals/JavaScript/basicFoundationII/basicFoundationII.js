// Biggie Size - Given an array, write a function that changes all positive 
// numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) 
// returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(x) {
	for (var i = 0; i < x.length; i++) {
		if (x[i] > 0) {
			x[i] = 'big';
		}
	}
	return x;
}
// console.log(makeItBig([-1,3,5,-5]));

// Print Low, Return High - Create a function that takes in an array of numbers.  
// The function should print the lowest value in the array, and return the highest 
// value in the array.

function printLowReturnHigh(x) {
	var lowestNum = x[0];
	var highestNum = x[0];
	for (var i = 0; i < x.length; i++) {
		if (lowestNum > x[i]) {
			lowestNum = x[i];
		}
		if (highestNum < x[i]) {
			highestNum = x[i];
		}
	}
	console.log(lowestNum);
	return highestNum;
}
// console.log(printLowReturnHigh([-1,3,9934,5,35,-83945,-5]));

// Print One, Return Another - Build a function that takes in an array of numbers.  
// The function should print the second-to-last value in the array, and return the 
// first odd value in the array.

function print2ndReturnOdd(x){
	for (var i = 0; i < x.length; i++) {
		console.log(x[x.length - 2]); // why 2 and not minus 1?

		if (x[i] < 0) {
			return x[i];
		}
	}
}
// console.log(print2ndReturnOdd([3,9934,5,35,-83945,-5]));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a 
// function that returns a new array where each value in the original array has been 
// doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the 
// original array.

function double(x) {
	var dblArr = [];
	for (var i = 0; i < x.length; i++) {
		dblArr.push(x[i] * x[i]);
	}
	return dblArr;
}
// console.log(double([1,2,3]));

// Count Positives - Given an array of numbers, create a function to replace the last 
// value with the number of positive values found in the array.  Example, 
// countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(x) {
	var temp = x;
	var posCount = 0;

	for (var i = 0; i < x.length; i++) {
		if (x[i] > 0) {
			posCount++;
		}
	}
	temp[x.length -1] = posCount;
	return temp;
}
// console.log(countPositives([-1,1,1,1]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has 
// three odd values in a row, print "That's odd!".  Every time the array has three evens 
// in a row, print "Even more so!".

function evenOdds(x) {
	let odds = 0, evens = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            evens++;
        }
        if (evens === 3) {
            console.log("Even more so!");
            evens = 0;
        }
        if (x[i] % 2 !== 0) {
            odds++;
        }
        if (odds === 3) {
            console.log("That's odd!")
            odds = 0;
        }
    }
}
// console.log(evenOdds([3,2,2,1,4,2,4,1,1,1]));


// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, 
// console.log each array value and return arr.

function add1ToOddIndices(arr) {
	for (var i = 0; i < arr.length; i++) { 
		if (i % 2 != 0) {
			arr[i] += 1;
		}
		console.log(arr[i]);
	}
	return arr;
}
// console.log(add1ToOddIndices([3,9934,5,35,-83945,-5]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 
// 'given an array') containing strings.  Working within that same array, replace each 
// string with a number - the length of the string at the previous array index - and return 
// the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return 
// ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(x) {
	for (var i = x.length - 1; i > 0; i--) { 
		x[i] = x[i - 1].length;
	}
	return x;
}
// console.log(previousLengths(["hello", "dojo", "awesome"]));

// Add Seven - Build a function that accepts an array. Return a new array with all the values 
// of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) 
// should return [8,9,10] in a new array.

function addSeven(x) {
	var newArr = [];
	for (var i = 0; i < x.length; i++) {  
		newArr[i] = x[i] + 7;
	}
	return newArr;
}
// console.log(addSeven([1,2,3]));

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: 
// reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

// WRONG SOLUTION!!
function reverse(x) {
	// for (var i = 0; i < x.length / 2; i++) { 
	// 	var temp = x[i];
	// 	x[i] = x[x.length - 1 - i];
	// 	temp = x[x.length - 1 - i];
	// }

	for (var i = 0; i <= Math.floor((x.length - 1) / 2); i++) {
		let temp = x[i];
		x[i] = x[x.length - 1 - i];
		x[x.length - 1 - i] = temp;
	}
	return x;
}
// console.log(reverse([3,1,6,4,2]));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the 
// original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], 
// return [-1,-3,-5].

function negativeAll(x) {
	for (var i = 0; i < x.length; i++) {
		if (x[i] > 0) {
			x[i] = x[i] * -1
		}
		return x;
	}
}
// console.log(negativeAll([1,-3,5]));


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the 
// values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(x) {
	var count = 0;
	for (var i = 0; i < x.length; i++) {
		if (x[i] == 'food') {
			console.log('yummy');
			count++;
		}
	}

	if (count == 0) {
		console.log("I'm hungry");
	}
}
// alwaysHungry(["hello", "dojo", "awesome", 3, 4, 23344, "food", -222399, "coding", "food", "world"]);
// alwaysHungry(["hello", "dojo", "awesome", 3, 4, 23344,  -222399, "coding", "world"]);

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last 
// values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into 
// ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  
// No need to return the array this time.

// WRONG SOLUTION!!
function swapTowardCenter(x) {
	// for (var i = 0; i < x.length; i++) {
	// 	if (i % 2 === 0) {
	// 		var temp = x[i];
	// 		x[i] = x[x.length - 1 - i];
	// 		temp = x[x.length - 1 - i];
	// 	}
	// }

	for (var i = 0; i <= Math.floor((x.length - 1) / 2); i++) {
		if (i % 2 === 0) { 
			let temp = x[i];
			x[i] = x[x.length - 1 - i];
			x[x.length - 1 - i] = temp;
		}
	}
	return x;
}
console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));
console.log(swapTowardCenter([1,2,3,4,5,6]));

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the 
// number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, num) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * num;
	}
	return arr;
}
// console.log(scaleArray([1,2,3], 3));