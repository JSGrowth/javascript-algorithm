// 풀이시간 (코드 소요시간)
// 28분(9.018ms)

// 아이디어
// 1. plan에서 앞에서부터 값을 하나씩 읽으면서 need의 맨 앞의 값과 같으면 nWord를 갱신하면서 맨 앞의 값을 뺴낸다.
// 2. 그렇게 모든 plan의 값을 다 돈 뒤, nWord가 비어있으면(=모든 nWord와 pWord가 짝이 있었음을 의미) YES를 출력하고, 아니면 NO를 출력한다.

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(need, plan) {
  let needArr = need.split("");
  let planArr = plan.split("");
  let nWord = needArr[0]; // 여기서 선입선출이 이뤄지기에 queue문제다.
  needArr.shift();
  for (let pWord of planArr) {
    if (pWord === nWord) {
      nWord = needArr[0];
      needArr.shift();
    }
  }
  return nWord === undefined ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
// let b = "CDABE";
console.log(solution(a, b));
console.timeEnd("time");
