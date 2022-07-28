function solution(money, arr) {
	const product = arr.map(x => x).sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
	const n = product.length;
	let answer = 0;

	product.forEach((price, i) => {
		let sum = (price[0] / 2) + price[1];
		let cnt = 0;
		for (let j = 0; j < n; j++) {
			if (i !== j && sum > money) break;
			if (i !== j && sum <= money) {
				sum += product[j].reduce((acc, cur) => acc + cur);
				cnt++;
			}
		}
		answer = Math.max(answer, cnt);
	})
	return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));