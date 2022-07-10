function solution(s) {
  let answer = "";
  let len = s.length;
  if (len % 2 === 0) answer += s[parseInt(len / 2) - 1];
  answer += s[parseInt(len / 2)];
  return answer;
}

console.log(solution("study"));
console.log(solution("stud"));
