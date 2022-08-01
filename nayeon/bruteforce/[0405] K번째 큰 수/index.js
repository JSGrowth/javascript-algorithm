function solution(k, arr){
	const n = arr.length;
	const card = [...arr];
	const sumSet = new Set();
	let answer = 0;
	console.log(card)

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (let s = j + 1; s < n; s++) {
				const sum = card[i] + card[j] + card[s];
				sumSet.add(sum);
			}
		}
	}
	answer = [...sumSet].sort((a, b) => b - a)[k - 1];
	console.log(answer)
	return answer;
}


console.log("fuck")
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// let arr = [1, 2, 5]
console.log(solution(3, arr));