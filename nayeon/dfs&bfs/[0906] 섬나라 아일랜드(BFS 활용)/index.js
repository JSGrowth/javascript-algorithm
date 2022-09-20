// time: 6.334ms
console.time("time");
function solution(board) {
  let inum = 2;
  const dx = [1, 0, -1, 0, 1, -1, 1, -1];
  const dy = [0, 1, 0, -1, 1, -1, -1, 1];

  function bfs(i, j) {
    const queue = [];

    board[i][j] = inum;
    queue.push(i);
    queue.push(j);
    while (queue.length) {
      const ci = queue.shift();
      const cj = queue.shift();
      for (let k = 0; k < 8; k++) {
        const [ni, nj] = [ci + dx[k], cj + dy[k]];
        if (
          ni !== -1 &&
          ni !== board.length &&
          nj !== -1 &&
          nj !== board.length &&
          board[ni][nj] === 1
        ) {
          board[ni][nj] = inum;
          queue.push(ni);
          queue.push(nj);
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        bfs(i, j);
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
