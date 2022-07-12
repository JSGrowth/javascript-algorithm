function solution(s) {
  return s.replace(/A/g, "#"); // s전체에서 A들을 #으로 바꿈.
}

let str = "BANANA";
console.log(solution(str));
