function solution(arr) {
  let answer = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] >
        Math.max(
          i - 1 >= 0 ? arr[i - 1][j] : 0,
          i + 1 < n ? arr[i + 1][j] : 0,
          j - 1 >= 0 ? arr[i][j - 1] : 0,
          j + 1 < n ? arr[i][j + 1] : 0
        ) && answer++;
    }
  }
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
