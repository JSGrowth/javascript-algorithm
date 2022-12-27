function isPrime(n) {
  console.log(n);
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  const numArr = n.toString(k).split(/0+/);

  for (const num of numArr) {
    if (num && isPrime(parseInt(num))) answer++;
  }

  return answer;
}
