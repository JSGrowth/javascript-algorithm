// 풀이시간(소요시간)
// 15분(12.245ms)

// 아이디어
// 모든 지역을 방문하면서 1을 발견하면 그지점을 기점으로 주변의 1들에 islandNum(고유의 섬 번호)를 부여한다.
// 주변의 땅을 모두 방문했다면 다시 다음 지역을 방문하여 땅이고(0이 아님) 이미 방문한 섬도 아니면(음수도 아님) 또 섬의 범위를 dfs로 찾아나감.
// 그렇게 음수로 인덱싱을 한 islandNum을 양수로 바꿈으로써 답을 구한다.

// 개선과정
// 딱히 안보임.

console.time(`time`);
const dist = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
function solution(board) {  
    function dfs([x,y]) {
        for (let i = 0;i<dist.length;i++) {
            let nx = x + dist[i][0];
            let ny = y + dist[i][1];
            if (nx < 0 || nx >= board.length || ny < 0 || ny >= board[0].length) continue;
            if (board[nx][ny] === 1) {
                board[nx][ny] = islandNum;
                dfs([nx, ny]);
            }
        }
    }
    
    let islandNum = 0;
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === 1) {
                board[x][y] = islandNum;
                islandNum--;
                dfs([x, y]);
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