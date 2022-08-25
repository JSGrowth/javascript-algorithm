// 풀이시간(소요시간)
// 50분 (6.317ms)

// 아이디어
// 가장 큰 동전부터 차례대로 넣어가며 그 수가 포함된 개수를 줄여가고,
// 나머지 값을 나머지 동전들을 최소한으로 사용하여 넣을 수 있도록 내림차순 정렬대로 값들을 넣어간다.

// 개선과정
// 지금은 딱히 안보임.

console.time(`time`);
function solution(m, coin) {  
    // Initialize
    coin.sort((a, b) => b - a); // 내림차순 정렬 (혹여나 coin이 정렬되어있지 않는 경우를 고려)
    let rest = m, coinCnt = 0;
    // Logic
    for (let i = 0; i < coin.length; i++) {
        for (let j = i; j<coin.length; j++) {
            if (rest % coin[j] === 0) {
                coinCnt += Math.floor(rest / coin[j]);
                return coinCnt;
            } else {
                coinCnt += Math.floor(rest / coin[j]);
                rest %= coin[j];
            }
        }
    }
    return coinCnt;
}


let arr=[1, 2, 5];
console.log(solution(20, arr));
console.timeEnd('time');