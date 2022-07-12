function solution(arr) {
  let sum = 0,
    min = -1; // 나올 수 없는 값으로 초기값 셋팅하기
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) continue;
    sum += arr[i];
    min = min == -1 ? arr[i] : arr[i] >= min ? min : arr[i];
  }
  return sum + "\n" + min;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
