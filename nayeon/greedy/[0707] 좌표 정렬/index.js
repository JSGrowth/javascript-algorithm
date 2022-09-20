function solution(arr) {
  arr.sort((arr1, arr2) => {
    if (arr1[0] !== arr2[0]) return arr1[0] - arr2[0];
    else return arr1[1] - arr2[1];
  });
  return arr;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
