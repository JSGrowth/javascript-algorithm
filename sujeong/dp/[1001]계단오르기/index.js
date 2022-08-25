// 풀이시간(소요시간)
// 5분 (5.465ms)

// 아이디어
// 1번 걸음과 2번걸음에 도달하는 수는 간단히 생각되고 변하지 않기에 미리 지정해주고
// 이후에 dp에 dp[i] = dp[i-1] + dp[i-2]로 저장해가며 i가 n보다 1작을 때까지 반복한다.

// 개선과정
// 너무 간단해서 딱히 안보임.

console.time(`time`);
function solution(n) {  
    let dp = [1, 2]; // 1 / 1+1, 2
    for (let i = 2; i < n; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n-1];
}

console.log(solution(7));
console.timeEnd('time');