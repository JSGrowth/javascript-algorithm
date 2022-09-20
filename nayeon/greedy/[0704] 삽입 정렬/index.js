function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j;
    const tmp = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
