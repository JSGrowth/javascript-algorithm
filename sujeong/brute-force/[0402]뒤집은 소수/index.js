function flipNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}
function isPrime(num) {
  // 에라토스테네스의 체를 활용한 소수 판별
  if (num == 1) return false; // 1은 소수가 아님
  if (num != 2 && num % 2 === 0) return false; // 2를 제외한 짝수는 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // num의 최대 약수가 sqrt(num) 이하이므로 i=sqrt(n)까지 검사
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = "";
  for (item of arr) {
    // flip number
    let num = flipNumber(item);
    // check number is prime
    if (isPrime(num)) answer += num + " ";
  }
  return answer.trimEnd(); // 마지막 공백 제거
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
