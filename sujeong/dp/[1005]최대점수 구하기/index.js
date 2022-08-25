// 풀이시간(소요시간)
// 50분 (6.859ms)

// 아이디어
// m~현재 점수까지 j를 1씩 제거하면서 내려가며 dp[j]와 현재 문제를 풀기 전까지의 점수 + 현재 문제 점수를 비교하여 j시간이 걸릴때 최대 값을 찾아나간다.

// 개선과정
// 지금은 딱히 안보임

console.time(`time`);
function solution(m, arr) { 
    // Logic
    let dp = new Array(m+1).fill(0); // 최대값을 갱신해나가기 위한 dp
    for (let c of arr) {
        for (let j = m; j >= c[1]; j--){
            dp[j] = Math.max(dp[j], dp[j - c[1]] + c[0]);
        }
    }
    return dp[m];
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr)); // 제한시간, [점수, 푸는데 걸리는 시간]
console.timeEnd('time');