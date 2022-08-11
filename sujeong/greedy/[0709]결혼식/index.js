// 풀이시간(소요시간)
// 8분 (4.971ms)

// 아이디어
// 시간을 나타내는 배열을 만들어 그 시간대에 존재하는 사람들의 양을 구해나간다.

// 개선과정
// (딱히 안보임)

console.time(`time`);
function solution(times) {
  let arr = new Array(72).fill(0);
  let answer = 0;
  for (let time of times) {
    for (let i = time[0]; i < time[1]; i++) answer = Math.max(++arr[i], answer);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
console.timeEnd("time");
