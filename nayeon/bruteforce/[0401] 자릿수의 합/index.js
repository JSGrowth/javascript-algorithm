function sumDigits(num) {
	let sum = 0;
	let quotient = Math.floor(num / 10);

	if (quotient >= 1)
		sum += sumDigits(quotient);
	sum += num % 10;
	return sum;
}

function solution(n, arr){
	let max = Number.MIN_SAFE_INTEGER;
	let maxNum = -1;

	arr.forEach((num) => {
		const sum = sumDigits(num)
		if (sum > max) {
			max = sum;
			maxNum = num;
		} else if (sum == max && num > maxNum) {
			max = sum;
			maxNum = num;
		}
	})
	console.log(maxNum);
	return (maxNum)
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));