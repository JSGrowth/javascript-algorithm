// 풀이시간(소요시간)
// 1분(11.589ms)

// 아이디어
// Sol1. 내부의 정렬이 필요없는 문제여서 음수인지 양수인지에따라 neg 혹은 pos 배열에 담은 뒤, 출력할 때 neg와 pos를 순서대로 합쳐준다.

// 개선과정
// (정형화된 문제라서 딱히 안보임)

console.time(`time`);
function solution(arr) {
  let neg = [];
  let pos = [];
  for (let i = 0; i < arr.length; i++) arr[i] < 0 ? neg.push(arr[i]) : pos.push(arr[i]);
  return [...neg, ...pos];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
console.timeEnd("time");
