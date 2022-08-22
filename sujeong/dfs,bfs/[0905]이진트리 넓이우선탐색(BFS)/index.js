// 풀이시간(소요시간)
// 3분 (5.761ms)

// 아이디어
// 1~7의 값이 full binary tree일 경우에는 왼쪽이 2n, 오른쪽이 2n+1이란 점을 이용하여
// 큐에 2n, 2n+1을 넣어주며 탐색을 진행하고, cur이 7보다 커지면 큐에 추가하길 그만하고 반복문을 빠져나온다.
// 그렇게 answer에 저장된 path를 반환한다.

// 개선과정
// 간단한 문제라 딱히 안보임

console.time(`time`);
function solution() {
    let answer = "";
    let queue = [];
    queue.push(1);

    while (queue.length) {
        let cur = queue.shift();
        if (cur > 7) continue;
        answer+=`${cur} `;
        queue.push(cur * 2);
        queue.push(cur * 2 + 1);
    }

    return answer;
}

console.log(solution());
console.timeEnd('time');