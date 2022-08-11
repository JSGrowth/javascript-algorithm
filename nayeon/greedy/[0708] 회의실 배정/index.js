function solution(meeting) {
  let answer = 0;

  meeting.sort((arr1, arr2) => {
    if (arr1[1] !== arr2[1]) return arr1[1] - arr2[1];
    else return arr1[0] - arr1[1];
  });
  console.log(meeting);
  let endTime = 0;
  for (let m of meeting) {
    if (endTime <= m[0]) {
      answer++;
      endTime = m[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
