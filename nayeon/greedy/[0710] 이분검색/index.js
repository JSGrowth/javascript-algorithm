function solution(m, arr) {
  let answer;
  let lt = 0;
  let rt = arr.length - 1;
  arr.sort((a, b) => a - b);
  console.log(arr);
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    console.log("mid", mid);
    if (arr[mid] === m) {
      answer = mid;
      break;
    }
    if (m > arr[mid]) lt = mid + 1;
    else rt = mid - 1;
  }
  return answer + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
