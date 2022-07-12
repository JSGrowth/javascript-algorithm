function solution(s) {
  let answer = "";
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s.at(i))) {
      set.add(s.at(i));
      answer += s.at(i);
    }
  }
  return answer;
}
console.log(solution("ksekkset"));
