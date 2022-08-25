function solution(arr) {
  const dy = new Array(arr.length).fill(0);
  let maxIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIdx]) dy[i] = dy[maxIdx] + 1;
    else if (arr[i] < arr[maxIdx]) {
      let max = -1;
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dy[j] > max) max = dy[j];
      }
      dy[i] = max !== -1 ? max + 1 : 0;
    }
    if (dy[i] > dy[maxIdx]) maxIdx = i;
  }
  return dy[maxIdx] + 1;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
