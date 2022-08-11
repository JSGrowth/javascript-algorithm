// 풀이시간 (코드 소요시간)
// 13분(4.785ms)

// 아이디어
// Sol1. 하나의 배열을 기준으로 비교하며 중복되는 원소를 찾고, 이를 BS 방식으로 추가
// => O(arr1.length * arr2.length)가 되어 최대 배열길이가 10억인점을 고려하면 시간 복잡도가 매우 높아질 수 있다

// Sol2. 두 배열을 일단 오름차순으로 정렬하고 Idx를 이동하며, 두 배열의 현재 인덱스 값이 동일하면 배열에 추가하고, 다르다면 작은 값을 가진 배열의 인덱스를 ++ 한다.
// => 일단 이걸로 해보기로 함.

// 개선과정
// 1. 왜인지는 모르겠지만 배열로 출력할 때보다 string으로 변환해서 출력하니 속도가 2ms나 줄어들었다. (for문보다 array의 toString()의 시간복잡도가 높은가,,?)

console.time("time");
function solution(arr1, arr2) {
  // Initialize
  let goalSize = arr1.length + arr2.length;
  let result = [];
  arr1.sort();
  arr2.sort();

  // Logic
  for (let idx1 = 0, idx2 = 0; goalSize > idx1 + idx2; ) {
    if (arr1[idx1] === arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++;
      idx2++;
      continue;
    }
    arr1[idx1] < arr2[idx2] ? idx1++ : idx2++;
  }

  // Output
  let answer = "";
  result.map((v) => answer +=(v+" "));
  return answer.trimEnd();
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
console.timeEnd("time");
