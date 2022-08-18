// 풀이시간(소요시간)

// 아이디어

// 개선과정

console.time(`time`);
// 인접행렬
function solution(n, arr) {
    // Initialize
    let ans = 0;
    let visited = Array(n).fill(false);
    let nodeArr = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let [val, nVal] of arr) {
        nodeArr[val][nVal] = 1; // node여부
    }
    // Logic - dfs =========================================
    function dfs(val) {
        if (val === n) return ans++;
        for (let i = 1; i <= n; i++){
            if (nodeArr[val][i] === 1 && !visited[i]) {
                visited[i] = true;
                dfs(i);
                visited[i] = false;
            }
        }
    }
    visited[1] = true;
    dfs(1);
    return ans;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
console.timeEnd('time');
