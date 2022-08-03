function solution(arr1, arr2) {
  let p1 = 0,
    p2 = 0;
  const answer = [];
  const len = arr1.length + arr2.length;

  for (let i = 0; i < len; i++) {
    if (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
      else answer.push(arr2[p2++]);
    } else if (p1 < arr1.length) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
