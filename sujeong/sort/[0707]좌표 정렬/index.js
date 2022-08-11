// 풀이시간(소요시간)
// 9분(10.371ms)

// 아이디어
// Sol1. arr[prev]와 arr[prev-1]의 첫번째 값에 대해 선택 정렬을 하는데,
//      이때  만약 첫번째 값이 같다면 두번째 값에 대해서 선택정렬을 한다.

// 개선과정
// (너무 기본적인 문제라 안보임)

console.time(`time`);
function solution(arr) {
  for (let idx = 1; idx < arr.length; idx++) {
    let temp;
    for (let prev = idx; prev > 0; prev--) {
      if (
        arr[prev - 1][0] > arr[prev][0] ||
        (arr[prev - 1][0] === arr[prev][0] && arr[prev - 1][1] > arr[prev][1])
      ) {
        temp = arr[prev - 1];
        arr[prev - 1] = arr[prev];
        arr[prev] = temp;
      }
    }
  }
    let answer = "";
    for (let coord of arr) {
        answer += `${coord[0]} ${coord[1]}\n`;
    }
    return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
console.timeEnd("time");
