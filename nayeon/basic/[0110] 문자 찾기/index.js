function solution(s, t) {
  let answer = 0;
  answer = s.match(new RegExp(t, "g")).length;
  return answer;
}

solution("COMPUTERPROGRAMMING", "R");
