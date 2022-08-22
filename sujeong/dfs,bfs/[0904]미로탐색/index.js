// 풀이시간(소요시간)
// 35분 (6.972ms)

// 아이디어
// 이 문제는 bfs로 푸는게 더 비효율적이다. (step을 기억해야하는 배열이 추가적으로 더 필요하기떄문에)
// 그렇기에 이 문제는 dfs로 풀었다.
// for문으로 dist에 있는 방향에 맞춰 탐색을하며 범위 내인지, 벽은 아닌지, visited는 아닌지 확인하여 갈 수 있다면 dfs함수를 호출한다.
// 그러다 목적지에 도착하면 answer++를 하고 return을 한다.

// 개선과정
// if문을 나눠놨던걸 하나로 합쳤다.

console.time(`time`);
let dist = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0]
]
function solution(board) {
    // Initialize
    // 범위 체크하는 함수
    let checkBound = (x, y) => { return x >= 0 && x < board.length && y >= 0 && y < board.length };
    let answer = 0;
    let visited = new Set();
    visited.add(`${0}_${0}`);
    dfs(0, 0, visited);

    // Logic
    function dfs(x, y, visited) {
        for (let i = 0; i < dist.length; i++) {
            let [newX, newY] = [x + dist[i][0], y + dist[i][1]]; // 새로운 좌표
            if (!checkBound(newX, newY) || board[newX][newY] === 1 || visited.has(`${newX}_${newY}`)) continue; // 범위 밖, 벽, visited
            if (newX === board.length - 1 && newY === board.length - 1) { // 도착하면 answer++
                answer++;
                continue;
            }
            // 다음 dfs를 갈때만 visited를 추가하고 다시 다른 경로를 갈때를 위해 delete도 해준다.
            visited.add(`${newX}_${newY}`);
            dfs(newX, newY, visited);
            visited.delete(`${newX}_${newY}`);
        }
    }
    // Output
    return answer;
}

    
let arr=[[0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));
console.timeEnd('time');