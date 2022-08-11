// 풀이시간(소요시간)
// 20분+12분 (11.019ms)

// 아이디어
// 종료시간을 기준으로 강의들을 내림차순 하고, 하나씩 강의를 가져와 timeline의 마지막에 추가된 강의의 시작시간보다 종료시간이 이전이면 강의를 추가한다.

// 개선과정
// 아마 잘못푼것 같다... 더 이야기해봐야할 듯...?

console.time(`time`);
function solution(meeting) {
  meeting.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  let timeline = [];
  for (let m of meeting) {
    if (timeline.length === 0 || timeline[timeline.length - 1][1] <= m[0]) {
      timeline.push(m);
    }
  }
  return timeline.length;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));
console.timeEnd("time");
