function solution(arr) {
  let answer = 0;
  let nowMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > nowMax) {
      nowMax = arr[i];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
// 점점커지다가 중간에 함정이 연속으로 있는 경우
let exam2 = [120, 121, 122, 123, 124, 125, 126, 100, 100, 127]; // 8이나와야함.
console.log(solution(exam2));
// 동일한 키만 있는 경우
let exam3 = [120, 120, 120, 120, 120, 120, 120, 120, 120, 120]; // 작거나 같으면 안보이니까 1이나와야함.
console.log(solution(exam3));
// 점점 작아지는 경우
let exam4 = [180, 170, 160, 150, 140, 130, 120, 110, 100]; // 1이나와야함.
console.log(solution(exam4));
