// 소요시간
// 약 25분 (9.389ms)

// 아이디어
// Sol1. 전형적인 투포인트 알고리즘 같음. SPoint와 endPoint를 만들어서
//       s~e의 합이 m보다 작다면 e++, 같다면 answer++후 s++와 e=s, 크다면 s++하면된다.

// 개선과정
// 1. while문 속 sum과 m을 비교하는 if문을 삼항연산자로 변경하여 12.139ms -> 9.389ms
// 2. sumF를 함수로 만들어 직접 sum을 구하는것과 reduce를 사용하는것을 비교했는데 sumF를 만든게 평균적으로 아주 조금 더 빠르다 9.389ms ->8.45ms

console.time("time");
function sumF(...items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) sum += items[i];
  return sum;
}

function solution(m, arr) {
  let s = 0,
    e = 0,
    answer = 0;
  while (s < arr.length && e < arr.length) {
    // let sum = arr.slice(s, e + 1).reduce((acc, v) => acc + v, 0);
    let sum = sumF(...arr.slice(s, e + 1));
    if (sum === m) {
      answer++;
      s++;
      e = s;
    } else sum < m ? e++ : s++;
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
console.timeEnd("time");
