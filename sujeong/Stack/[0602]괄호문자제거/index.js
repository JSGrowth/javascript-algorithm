// 풀이시간 (코드 소요시간)
// 18분 40초 (6.668ms)

// 아이디어
// Sol1. (를 발견하면 s에서의 해당 인덱스를 stack에 넣는다. 그리고 )가 발견되면 stack에서 인덱스를 꺼내 이 두 점을 unavailable에 넣는다.
//        모든 (과)의 탐색이 끝나면 s에서 unavailable을 제외한 나머지 문자를 answer에 넣어 반환한다.

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(s) {
  // Initialize
  let stack = [];
  let unavailable = new Map();

  // Logic
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") unavailable.set(stack.pop(), i);
  }
  // Output
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (unavailable.has(i)) i = unavailable.get(i);
    else answer += s[i];
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
console.timeEnd("time");
