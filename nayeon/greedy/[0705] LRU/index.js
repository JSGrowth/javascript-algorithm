function solution(size, arr) {
  const cache = new Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const pos = cache.indexOf(arr[i]);

    if (pos === -1) {
      for (let j = size - 1; j >= 0; j--) {
        cache[j] = cache[j - 1];
      }
    } else {
      for (let j = pos; j >= 0; j--) {
        cache[j] = cache[j - 1];
      }
    }
    cache[0] = arr[i];
    console.log(cache);
  }
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
