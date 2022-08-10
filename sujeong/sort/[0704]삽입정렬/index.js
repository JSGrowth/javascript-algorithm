// 풀이시간(소요시간)
// 10분(13.599ms)

// 아이디어
// Sol1. 삽입정렬을 이용해서 푸는 문제이기 때문에 1번인덱스부터 끝 인덱스 까지 i를 이동하며
//      각각의 1~i 사이의 값과 0~i-1과 비교하는데,
//      prev보다 prev - 1이 크면 둘을 바꿔나가고,
//      이때 prev보다 prev - 1이 작으면 i의 이동을 멈춰 시간복잡도를 낮게 유지하는 문제다.

// 개선과정
// (정형화된 문제라 개선할 점이 안보임)

console.time(`time`);
function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp;
    for (let prev = i; prev > 0; prev--) {
      if (arr[prev - 1] > arr[prev]) {
        temp = arr[prev - 1];
        arr[prev - 1] = arr[prev];
        arr[prev] = temp;
      } else break; // 이게 포인트! (삽입정렬은 이미 prev-1이 prev보다 작아지면 그 전의 아이들은 다 정렬이 되어있기 때문에 더 들어갈 필요가 없음.)
      console.log(`prev: ${prev}, i: ${i}, arr: ${arr}`);
    }
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
console.timeEnd("time");
