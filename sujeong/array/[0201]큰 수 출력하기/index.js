function solution(arr) {
  let answer = [];
  let max = 0; // n의 범위는 1~100인점을 이용해 max를 0으로 초기화
  arr.forEach((elem) => {
    if (elem > max) answer.push(elem);
    max = elem;
  });
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
