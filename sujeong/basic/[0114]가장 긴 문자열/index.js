function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    answer = s[i].length > answer.length ? s[i] : answer;
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
