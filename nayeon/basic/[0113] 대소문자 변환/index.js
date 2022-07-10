function solution(s) {
  let answer = "";
  for (let ch of s) {
    if (ch === ch.toUpperCase()) answer += ch.toLowerCase();
    else answer += ch.toUpperCase();
  }
  return answer;
}

solution("StuDY");
