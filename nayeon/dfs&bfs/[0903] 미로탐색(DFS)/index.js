console.time("time");
function solution(arr) {
  // (0, 0) -> (6, 6)
  let answer = 0;

  function dfs(row, col) {
    if (row === 6 && col === 6) return answer++;

    arr[row][col] = 2;
    if (row + 1 !== 7 && !arr[row + 1][col]) dfs(row + 1, col);
    if (col + 1 !== 7 && !arr[row][col + 1]) dfs(row, col + 1);
    if (row - 1 !== -1 && !arr[row - 1][col]) dfs(row - 1, col);
    if (col - 1 !== -1 && !arr[row][col - 1]) dfs(row, col - 1);
    arr[row][col] = 0;
  }
  dfs(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
console.timeEnd("time");
