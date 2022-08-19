// time: 5.87ms
console.time('time');
function solution(arr) {
	let answer;
	let end_time;

	answer = 0;
	end_time = 0;
	arr.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		else return a[1] - b[1];
	});
	for (meeting of arr) {
		if (meeting[0] >= end_time) {
			answer++;
			end_time = meeting[1];
		}
	}
	return answer;
}
const arr = [
	[1, 4],
	[2, 3],
	[3, 5],
	[4, 6],
	[5, 7],
];
const arr2 = [
	[3, 3],
	[1, 3],
	[2, 3],
];
console.log(solution(arr));
console.log(solution(arr2));
console.timeEnd('time');
