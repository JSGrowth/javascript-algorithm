// 풀이시간(소요시간)
// 4분 (4.966ms)

// 아이디어
// 1~n-1까지 for문을 반복하는 1001과 달리 1~n까지 
// dp[0] =1 , dp[1] = 2일때, x까지 도달하는 데 가능한 경우의 수가 dp[x] = dp[x-1] + dp[x-2]인 점을 이용해
// 반복하여 결과 dp[n](돌다리는 7개의 돌다리가 있으면 8번을 걸어야함)을 반환한다.

// 개선과정
// 간단해서 딱히 안보임

console.time(`time`);
function solution(n) {  
    let dp = [1, 2]; // 1 / 1+1, 2
    for (let i = 2; i <= n; i++)  dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}
console.log(solution(7));
console.timeEnd('time');