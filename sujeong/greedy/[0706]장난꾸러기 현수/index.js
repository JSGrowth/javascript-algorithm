// 풀이시간(소요시간)
// 20분(8.396ms)

// 아이디어
// 예제2처럼 본래 현수친구의 자리 바로 앞과 현수 친구의 키가 같은 경우 현재 현수가 있는 위치를 알 수가 없다.
// 하지만, 뒤에서부터 읽으며 현수 친구를 찾는건 무조건 현재 현수의 친구 앞자리아이가 현수 친구보단 클 것이기 떄문에
// 뒤에서부터 현재 현수 친구의 위치를 찾는다면 문제 없이 답을 찾을 수 있다.

// 개선과정
// (딱히 개선할 것이 없음)

console.time(`time`);
function solution(arr) {
  let hIdx = 0; // 키가 큰 현수
  let fIdx = 0; // 키가 작은 데 바꿔준 현수의 친구
  let fVal; // 키가 작은 데 바꿔준 현수 친구의 키
  for (let i = arr.length - 1; i > 0; i--) {
    if (!fVal && arr[i] < arr[i - 1]) {
      fIdx = i + 1;
      fVal = arr[i];
    }
    if (arr[i - 1] >= arr[i] && fVal && fVal <= arr[i]) hIdx = i;
  }
  return `${hIdx} ${fIdx}`;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr2));
console.timeEnd("time");
