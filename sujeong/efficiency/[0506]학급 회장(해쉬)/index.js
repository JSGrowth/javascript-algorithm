// 풀이시간(소요시간)
// 9분(7.435ms)

// 아이디어
// Sol1. 이게 왜 해쉬인지는 모르겠지만 Map으로 지지자의 수를 합해나가면서 A~E중 지지자가 가장 많은 아이를 출력

// 개선과정
// 1. for문으로 Map을 채우고 forEach로 A~E중 최대지지자 아이를 찾는 방식에서, Map을 채우며 비교까지 해나가도록 변경하여 (11.904ms -> 7.435ms로 개선)

console.time("time");
function solution(s) {
  let box = new Map();
  let ans = "A",
    max = 1;
  for (let i = 0; i < s.length; i++) {
    let cur = s.at(i);
    if (box.has(cur)) {
      let newNum = box.get(cur) + 1;
      box.set(cur, newNum);
      if (newNum > max) {
        max = newNum;
        ans = cur;
      }
    } else box.set(cur, 1);
  }
  return ans;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
console.timeEnd("time");
