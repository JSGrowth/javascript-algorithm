function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = arr[i] > answer ? answer : arr[i];
  }
  return answer;
}
let txtArr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(txtArr));

let example1 = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(example1));