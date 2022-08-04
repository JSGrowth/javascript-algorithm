// 풀이시간 (코드 소요시간)
// 약 5분 (9.413ms)

// 아이디어
// stack 배열을 만들어 (가 들어오면 index를 넣고, )가 들어모녀 뒤에서부터 값을 팝한다.

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
console.timeEnd("time");
