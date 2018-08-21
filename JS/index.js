console.log('Merge Sort');

const mergeSort = (array) => {
	const arrayLength = array.length; // Store array's length
	// If the array only contains 1 item, return it. Ignore everything else.
	if (arrayLength < 2) {
		return array
	}
	// Find the center of the array's index and store it into variable.
	const middle = Math.floor(arrayLength/2),
	// Find the left half of the array and store it into variable.
		 left = array.slice(0, middle),
	// Find the right half of the array and store it into variable.
		 right = array.slice(middle);

	// Recursively divides array into pieces.
	return merge(
		mergeSort(left),
		mergeSort(right)
	);
	

}

const merge = (left, right) => {
	let [ result, indexLeft, indexRight ] = [ [], 0, 0 ];

	// Store left and right array length
	const [ leftLen, rightLen ] = [ left.length, right.length ];
	// Iterate through arrays and merge items in order
	while (indexLeft < leftLen && indexRight < rightLen) {
		if (left[indexLeft] < right[indexRight]) {
			result.push(left[indexLeft]);

			indexLeft ++;
		}
		else {
			result.push(right[indexRight]);
			indexRight ++;
		}
	}
	// Populate an array with remaining items in left and right array.
	const remaining = [...left.slice(indexLeft), ...right.slice(indexRight)];
	// Return 'result' array with 'remaining' array concatenated. 
	return [...result, ...remaining];

}

const arr = [7, 2, 3, 1, 15, 3, 90, 7, 5, 3, 3, 0];

console.log(mergeSort(arr));




