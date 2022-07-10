function solution(s) {
  let answer = "";
  const chSet = new Set();
  for (let ch of s) {
    if (!chSet.has(ch)) {
      answer += ch;
      chSet.add(ch);
    }
  }
  return answer;
}

console.log(solution("ksekkset"));
