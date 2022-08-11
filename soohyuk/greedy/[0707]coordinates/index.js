// time: 7.747ms
console.time('time');
function solution(arr) {
	arr.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});
	return arr;
}
const coor = [
	[2, 7],
	[1, 3],
	[1, 2],
	[2, 5],
	[3, 6],
];
console.log(solution(coor));
console.timeEnd('time');
