console.time("time");
function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  const hashMap = new Map();
  for (let ch of s) {
    if (!hashMap.has(ch)) hashMap.set(ch, 0);
    else hashMap.set(ch, hashMap.get(ch) + 1);
  }
  hashMap.forEach((value, key) => {
    if (value > max) {
      max = value;
      answer = key;
    }
  });
  return answer;
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));
console.timeEnd("time");
