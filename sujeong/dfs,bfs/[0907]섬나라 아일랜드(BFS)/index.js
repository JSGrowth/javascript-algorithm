// 풀이시간(소요시간)
// 15분(10.646ms)

// 아이디어
// board의 모든 지역을 탐색하며 1이 나오면 그 부분을 시작으로 islandNum을 갱신해나감.
// 그렇게 모든 섬을 발견하면서 islandNum을 찾으면 islandNum을 양수로 바꾼 값이 총 섬의 개수가 됨.

// 개선과정
// 딱히 안보임.

console.time(`time`);
const dist = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
function solution(board) {  
    function bfs(coord) {
        // 좌표를 큐에 넣고 좌표를 방문한 것으로 표시
        let [x, y] = coord;
        let queue = [];
        board[x][y] = islandNum;
        queue.push(coord);
        // 큐가 비어있지 않으면 반복 (bfs로 하나의 islandnum의 땅을 모두 방문)
        while (queue.length) {
            let cur = queue.shift();
            for (let i = 0; i < dist.length; i++) {
                let nx = cur[0] + dist[i][0];
                let ny = cur[1] + dist[i][1];
                // check boundary
                if (nx < 0 || nx >= board.length || ny < 0 || ny >= board[0].length) continue;
                // check visited & island number
                if (board[nx][ny] === 1) {
                    board[nx][ny] = islandNum;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    // 섬의 번호를 음수로 간직
    let islandNum = 0;
    for(let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            // 탐색하지않은 땅인 경우(0=바다, -1이하는 이미 방문한 섬)
            if(board[x][y] === 1) {
                islandNum--;
                bfs([x,y]);
            }
        }
    }
    return -islandNum;
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
        [0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));
console.timeEnd('time');