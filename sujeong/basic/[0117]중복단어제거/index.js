function solution(s) {
  let map = new Map(); // 중복 X + 순서 O
  s.forEach((str) => {
    map.set(str + "\n", "");
  });
  let answer = "";
  Array.from(map.keys()).forEach((key) => {
    answer += key;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
