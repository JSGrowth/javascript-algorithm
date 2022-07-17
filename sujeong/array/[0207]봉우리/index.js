// 느낀점
// 예전에 풀던 DP느낌이 나서 재밌었다.
// 배열 만드는 법에 대해 잘 몰랐는데 이번 알고리즘 스터디로 Array.from()의 활용법을 익힐 수 있었다.


let N;
let direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
function checkBoundary(y, x) {
  return x >= 0 && x < N && y >= 0 && y < N;
}
function solution(arr) {
  // Initialize
  let answer = 0;
  N = arr.length;

  // 이중배열을 만드는 최신방법.. (이 친구 덕에 40분 소요)
  let tfTable = Array.from(Array(5), () => new Array(5).fill(0));

  // Logic
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      let amITop = true;
      for (let k = 0; k < 4; k++) {
        let tmpY = y + direction[k][0];
        let tmpX = x + direction[k][1];
        // check condition
        if (!checkBoundary(tmpY, tmpX)) continue;
        if (tfTable[tmpY][tmpX] && arr[tmpY][tmpX] < arr[y][x]) {
          tfTable[tmpY][tmpX] = 0;
          answer--;
        }
        if (arr[tmpY][tmpX] > arr[y][x]) amITop = false;
      }
      if (amITop) {
        tfTable[y][x] = 1;
        answer++;
      }
    }
  }
  console.log(tfTable);
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
