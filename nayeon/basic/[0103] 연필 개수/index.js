function solution(n) {
  if (n % 12 == 0) return n / 12;
  else return parseInt(n / 12) + 1;
}
