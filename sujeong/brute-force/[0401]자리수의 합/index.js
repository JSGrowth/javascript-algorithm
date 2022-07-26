function solution(n, arr) {
  let answer = 0,
    maxVal = 0;
  for (let idx = 0, item = arr[idx]; idx < n; idx++, item = arr[idx]) {
    let sum = 0;
    for (let tenPower = 1; tenPower < item; tenPower *= 10) {
      sum += Math.floor(item / tenPower) % 10;
    }
      if (sum > maxVal) {
      maxVal = sum;
      answer = item;
    } else if (sum === maxVal) { // 합이 같은 경우
        answer = item > answer ? item : answer;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
