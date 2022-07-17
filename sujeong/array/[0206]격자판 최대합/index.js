// 느낀점
// 최대한 arr 배열만 사용하도록 하여 공간 복잡도를 낮추려다보니 1시간 정도 걸렸다.

function solution(arr) {
  let n = arr.length;
  let answer = 0; // 격자판의 값들의 크기는 1~50인점을 이용해 answer를 0으로 초기화
  let diagonalT = 0; // 우상위 대각선
  let diagonalB = 0; // 좌상위 대각선
  for (let y = 0; y < n; y++) {
    arr[y][n] = 0;
    for (let x = 0; x < n; x++) {
      // 가로줄 점수를 계산
      arr[y][n] += arr[y][x];
      // 세로줄 계산 (for 다 돌아야 비교 가능)
      if (arr[n] === undefined) arr[n] = new Array(n).fill(0);
      arr[n][x] += arr[y][x];
      // 우상위 대각선 계산 (for 다 돌아야 비교 가능)
      if (x === y) diagonalT += arr[y][x];
      // 좌상위 대각선 계산 (for 다 돌아야 비교 가능)
      if (x + y === 5 || (x === 3 && y === 3)) diagonalB += arr[y][x];
    }
    answer = Math.max(answer, arr[y][n]); // 가로줄 결과 중 최대값 계산
  }
  answer = Math.max(answer, diagonalT, diagonalB); // 가로, 좌상위, 우상위 비교 후 최대값 계산
  for (let x = 0; x < n; x++) answer = Math.max(answer, arr[n][x]); // 세로줄 결과 중 최대값 계산
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
