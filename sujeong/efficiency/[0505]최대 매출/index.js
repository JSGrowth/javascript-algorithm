// 풀이시간(소요시간)
// 6분(12.25ms)

// 아이디어
// SOL1. s++하면서 s~s+k의 합의 최댓값을 구하면 됨.

// 개선과정
// (일단은 개선할게 안보임..)

console.time("time");
function solution(k, arr) {
  let answer = 0;
  for (let s = 0; s < arr.length - 3; s++) {
    let sum = arr.slice(s, s + k).reduce((acc, v) => acc + v, 0);
    // console.log(`[${s}~${s+k}]의 sum: ${sum}`);
    answer = Math.max(sum, answer);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.timeEnd("time");
