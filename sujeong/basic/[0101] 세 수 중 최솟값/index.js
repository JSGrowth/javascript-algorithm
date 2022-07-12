function solution(a, b, c) {
  let answer = a < b ? (a < c ? a : c) : b < c ? b : c;
  return answer;
}
console.log(solution(6, 5, 11));
console.log(solution(2, 5, 1));
