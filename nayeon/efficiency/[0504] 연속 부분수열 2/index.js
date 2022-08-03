console.time("time");
function solution(m, arr) {
  const n = arr.length;
  let lt = 0;
  rt = 0;
  sum = 0;
  let answer = 0;

  while (rt < n) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
    rt++;
  }
  return answer;
}
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
console.timeEnd("time");
