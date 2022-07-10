function solution1(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        const answer = arr.filter((v, idx) => idx != i && idx != j);
        return answer;
      }
    }
  }
}
