function solution(s) {
  return s.match(new RegExp("[A-Z]", "g")).length; // 전체 s에서 A-Z의 문자 수를 반환
}

let str = "KoreaTimeGood";
console.log(solution(str));
