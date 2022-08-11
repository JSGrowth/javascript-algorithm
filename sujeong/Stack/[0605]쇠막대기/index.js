// 풀이시간 (코드 소요시간)
// 1시간 (6.926ms)

// 아이디어
// 1. s를 읽으면서 ( 가보이면 stack에 push를 한다.
// 2. s를 읽으면서 ) 가보이면 stack에서 pop을 하고, () 모양으로 붙어있는경우 이전까지 쌓인 stack의 크기만큼의 조각이 왼쪽에 잘려나옴. (answer+=stack.length)
// 3. s를 읽으면서 ) 가보이면 stack에서 pop을 하고, () 모양으로 붙어있지 않은경우 새로운 조각이 잘려나옴. (answer++)

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length; // ()모양에서 (now일때 이전까지 스택에 쌓인 만큼의 조각이 왼쪽에 잘려나옴
      else answer++; // (()())모양에서 (()()now 처럼 되면 ) 과 now사이에 한 조각만 추가되는 것.
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
console.timeEnd("time");
