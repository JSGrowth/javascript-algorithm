function isPrime(num) {
	if (num < 2)
		return false;
	for (let i = 2; i * i < num; i++)
		if (num % i == 0) return false;
	return true;
}

function solution(arr){
	const answer = []

	arr.forEach((num) => {
		const reverseNum = parseInt(num.toString().split("").reverse().join(""));
		console.log(reverseNum)
		if (isPrime(reverseNum))
			answer.push(reverseNum);
	})
	console.log(answer)
	return (answer)
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));