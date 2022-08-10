// 풀이시간(소요시간)
// 16분(11.605ms)

// 아이디어
// 버블정렬이란,
// Sol1. 앞에서부터 비교해나가며 가장 큰 값을 마지막 위치에 둔다.

// 개선과정
// (정형화된 문제라서 딱히 안보임)

console.time(`time`);
function solution(arr) {
  for (let pivot = arr.length - 1; pivot >= 0; pivot--) {
    let max = arr[0];
    for (let e = 1; e <= pivot; e++) {
      if (arr[e] < arr[e - 1]) {
        max = arr[e - 1];
        arr[e - 1] = arr[e];
        arr[e] = max;
      }
      // console.log("for show arr status : "arr);
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
console.timeEnd("time");
