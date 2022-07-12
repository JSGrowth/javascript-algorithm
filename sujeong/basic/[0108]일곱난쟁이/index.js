// 더럽고... 효율 개똥이지만... 일단 풀어보자....
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      let sum = 0;
      let answer = [];
      for (let k = 0; k < arr.length; k++) {
        if (i === k || j === k) continue;
        sum += arr[k];
        answer.push(arr[k]);
        if (sum > 100) break; // 이미 초과했기에 시간 단축을 위해 넘어감.
      }
      if (sum === 100) {
        return answer;
      }
    }
  }
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
