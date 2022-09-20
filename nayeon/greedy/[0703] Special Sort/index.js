function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[0];
    let tmpIndex = 0;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] * arr[j] <= 0 && arr[j] < 0)
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
}

let arr = [0, 1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
