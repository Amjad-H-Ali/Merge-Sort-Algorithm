console.log('Merge Sort');

const mergeSort = (array) => {
	// If the array only contains 1 item, return it. Ignore everything else.
	if (array.length === 1) {

		return array
	}
	// Find the center of the array's index and store it into variable.
	const middle = Math.floor(array.length/2);
	// Find the left half of the array and store it into variable.
	const left = array.slice(0, middle);

	return left;


}

console.log(mergeSort([1,2,3,4,5,6,7]));