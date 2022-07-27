function solution(test){
	let answer = 0;
	const n = test[0].length;
	const m = test.length;

	console.log(n, m)
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			let cnt = 0;
			for (let a = 0; a < m; a++) {
				let pi = pj = 0;
				for (let b = 0; b < n; b++) {
					if (test[a][b] === i) pi = b;
					if (test[a][b] === j) pj = b;
				}
				if (pi > pj) cnt++;
			}
			if (cnt === m) answer++;
		}
	}
	return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));