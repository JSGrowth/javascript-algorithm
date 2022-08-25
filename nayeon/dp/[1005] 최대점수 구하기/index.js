function solution(m, arr) {
  const dp = new Array(m + 1).fill(0);

  arr.forEach(([score, time]) => {
    console.log(time, score);
    for (let i = time; i < m + 1; i++) {
      dp[i] = Math.max(dp[i], dp[i - time] + score);
    }
  });
  return dp[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
