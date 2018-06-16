console.log('Merge Sort');

const mergeSort = (array) => {
	const arrayLength = array.length; // Store array's length
	// If the array only contains 1 item, return it. Ignore everything else.
	if (arrayLength === 1) {
		return array
	}
	// Find the center of the array's index and store it into variable.
	const middle = Math.floor(arrayLength/2);
	// Find the left half of the array and store it into variable.
	const left = array.slice(0, middle);
	// Find the right half of the array and store it into variable.
	const right = array.slice(middle);

	return right;


}

console.log(mergeSort([1,2,3,4,5,6,7]));