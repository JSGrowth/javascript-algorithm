// 풀이시간(소요시간)
// 12분(13.278ms)

// 아이디어
// s를 점프한 스텝량과 함꼐 queue에넣어 추가하고, 이를 while문을 통해 빼내면서 발견했는지, 범위를 넘어섯는지, 이미 방문한 경우인지 체크하여
// 문제가 없다면 방문여부를 true로 바꾸고, cur에서 이동가능한 값들을 큐에 넣어 탐색을 함.

// 개선과정
// 지금은 딱히 안보임.

console.time(`time`);
function solution(s, e) {  
    let visited = new Set(); // 방문한 지점인지 체크
    let queue = []; // bfs를 위한 큐
    queue.push([s,0]); // 시작지점, 이동한 스텝량
    while (queue.length) {
        let [cur, cnt] = queue.shift(); // 큐에서 꺼내오기
        if (cur === e) return cnt; // 찾음 => 값을 리턴하고 종료
        if (cur < 0 || cur > 100000) return -1; // 불가능함을 의미.
        if (visited.has(cur)) continue; // 이미 방문한 경우

        // 방문 체크
        visited.add(cur);
        // 가능한 경우들을 추가함.
        queue.push([cur + 5, cnt + 1]); // 먼 곳을 빨리 갈 수 있는경우 ->  e가 더 있을만한 곳 -> 그 외 순으로 push를 해줘야 효율적인 탐색이 가능하다.(visited도 있기에 미리 안될 부분을 거를 수 있따.)
        queue.push([cur-1, cnt+1]);
        queue.push([cur+1, cnt+1]);
    }
    return -1;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
console.timeEnd('time');