console.time("time");
function solution(k, arr) {
  let i = 0,
    sum = 0;
  let answer = Number.MIN_SAFE_INTEGER;

  while (i < k) sum += arr[i++];
  console.log(sum);
  answer = sum;
  while (i < arr.length) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
    i++;
  }
  return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.timeEnd("time");
