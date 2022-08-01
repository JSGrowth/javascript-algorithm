// 풀이시간(소요시간)
// 20분(12.654ms)

// 아이디어
// SOL1. 0503과 다 동일한데, answer++의 위치와 sum>m일때 e=s부분추가 정도의 차이가 있다.

// 개선과정
// (일단은 개선할게 안보임..)

console.time("time");
function solution(m, arr) {
  let size = arr.length,
    answer = 0;
  for (let s = 0, e = 0; s < size; ) {
    let sum = arr.slice(s, e + 1).reduce((acc, v) => acc + v, 0);
    if (sum > m || e >= size) {
      s++;
      e = s;
    } else {
      answer++;
      //   console.log(`what makes answer++: ${s},${e}`);
      e++;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
console.timeEnd("time");
