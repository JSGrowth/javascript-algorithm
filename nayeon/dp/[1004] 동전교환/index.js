function solution(m, coin) {
  const dp = new Array(m + 1).fill(0);
  coin.sort((a, b) => a - b);
  console.log(coin);

  coin.forEach((c) => {
    for (let i = c; i < m + 1; i++) {
      dp[i] = dp[i - c] + 1;
    }
  });
  return dp[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

let arr2 = [7, 2, 5];
console.log(solution(19, arr2));
