const arr = [
	3,
	'a',
	'a',
	'a',
	2,
	3,
	'a',
	{ a: 2 },
	3,
	'a',
	2,
	4,
	9,
	3,
	{ a: 2 },
];

function getMostFrequent(arr) {
	// Your code here

	const map = new Map();

	for (const el of arr) {
		if (!map.has(el)) map.set(el, 1);
		else {
			map.set(el, map.get(el) + 1);
		}
	}

	console.log(map);

	// convert map into array of tuples and sort it based on a second element; from highest to lowest
	const frequencies = Array.from(map).sort((a, b) => {
		return b[1] - a[1];
	});
	console.log('frequencies', frequencies);

	const mostFrequent = frequencies[0];

	console.log(
		`most frequent is ${mostFrequent[0]}, which occured ${mostFrequent[1]} times`,
	);

	return mostFrequent[0];
}

const mostFrequent = getMostFrequent(arr);

export default getMostFrequent;
