// time: 6.246ms
console.time("time");
function solution(board) {
  let inum = 2;
  const dx = [1, 0, -1, 0, 1, -1, 1, -1];
  const dy = [0, 1, 0, -1, 1, -1, -1, 1];

  function dfs(i, j) {
    board[i][j] = inum;

    for (let k = 0; k < 8; k++) {
      const ni = i + dx[k];
      const nj = j + dy[k];
      if (
        ni !== board.length &&
        ni !== -1 &&
        nj !== board.length &&
        nj !== -1 &&
        board[ni][nj] === 1
      )
        dfs(ni, nj);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        dfs(i, j);
        inum++;
      }
    }
  }
  return inum - 2;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
console.timeEnd("time");
