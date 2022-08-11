// 풀이시간 (코드 소요시간)
// 약 30분 (8.874ms)

// 아이디어
// 1. arr1과 arr2의 가상의 인덱스를 두고, 이를 크기를 비교하며 뒤로 이동시킨다.

// 개선과정
// 1. arr1과 arr2의 크기의 합을 미리 구해둠으로써 2ms 단축
// 2. arrIdx와 arr.length의 크기 비교를 삼항연산자로 바꿈으로써 0.5ms 단축

console.time("time");
function solution(arr1, arr2) {
  let goalSize = arr1.length + arr2.length, // arr의 사이즈를 미리 구해둬야 불필요한 검색을 줄여 시간절약할 수있다.
    arr1Idx = 0,
    arr2Idx = 0,
    result = [];
  while (result.length < goalSize) {
    if (arr1[arr1Idx] <= arr2[arr2Idx]) {
      result.push(arr1[arr1Idx]);
      arr1Idx < arr1.length ? arr1Idx++ : arr2Idx++;
    } else {
      result.push(arr2[arr2Idx]);
      arr2Idx < arr2.length ? arr2Idx++ : arr1Idx++;
    }
  }
  return result;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
console.timeEnd("time");
