function solution(arr) {
  // 1. i 번째 원소 선택하기
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    // 2. i 번째 원소 탐색하기
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    // i 번째 원소 swap 하여 적용하기
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
