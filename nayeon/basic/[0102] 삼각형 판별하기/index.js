function solution(a, b, c) {
  const max = Math.max(a, b, c);
  const rest = a + b + c - max;
  if (rest > max) return "YES";
  else return "NO";
}
