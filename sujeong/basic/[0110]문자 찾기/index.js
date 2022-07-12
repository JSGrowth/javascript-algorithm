function solution(s, t) {
  return s.match(new RegExp(t, "g")).length; // 정규식(new RegExp)으로 전역적으로 t를 찾은(match) 배열의 길이를 리턴
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
