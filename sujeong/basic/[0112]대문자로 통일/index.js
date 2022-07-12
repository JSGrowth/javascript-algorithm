function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    answer += s[i].toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
