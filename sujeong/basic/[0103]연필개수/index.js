function solution(n) {
  // n을 12로 나눈걸 올림하면 된다.
  let answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(25));
console.log(solution(178));
