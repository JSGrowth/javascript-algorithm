function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  const timeline = [];
  for (let time of times) {
    timeline.push([time[0], "s"]);
    timeline.push([time[1], "e"]);
  }
  console.log(timeline);
  timeline.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let t of timeline) {
    if (t[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
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
