// 풀이시간(소요시간)
// 4분 (8.122ms)

// 아이디어
// binary search의 전형적인 방법인 left, right, pivot을 만들어 l과 r의 중간인 pivot보다 target이 크다면 left를 pivot으로 갱신, 작다면 right를 pivot으로 갱신해 범위를 줄여간다.
// 이렇게 하면 O(log n)의 시간복잡도로 target을 빠르게 찾을 수 있다. (정렬된 상태에선 bs가 효율적이다)

// 개선과정
// 딱히 안보임.

console.time(`time`);
function solution(target, arr) {
  // Initialize(sort)
  arr.sort((a, b) => a[0] - b[0]);

  // Logic
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;
  myloop: while (left < right) {
    let pivot = Math.floor((left + right) / 2); // 인덱스는 정수여야하니까
    if (pivot < target) {
      left = pivot + 1;
      answer++;
      console.log(`left: ${left}, right: ${right}, pivot: ${pivot}`);
      continue myloop;
    } else {
      right = pivot - 1;
      answer++;
      console.log(`left: ${left}, right: ${right}, pivot: ${pivot}`);
      continue myloop;
    }
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
console.timeEnd("time");
