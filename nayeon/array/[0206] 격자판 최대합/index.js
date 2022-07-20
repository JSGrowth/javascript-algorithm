function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    const row_sum = arr[i].reduce((acc, cur) => acc + cur, 0);
    const col_sum = arr[0].reduce((acc, _, idx) => acc + arr[idx][i], 0);
    max = Math.max(Math.max(row_sum, col_sum), max);
  }
  const diagonal1 = arr[0].reduce((acc, _, i) => acc + arr[i][i], 0);
  const diagonal2 = arr[0].reduce((acc, _, i) => acc + arr[n - 1 - i][i], 0);
  answer = Math.max(diagonal1, diagonal2, max);
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
