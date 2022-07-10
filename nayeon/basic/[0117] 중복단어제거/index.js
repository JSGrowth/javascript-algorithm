function solution(str) {
  let answer = [];
  const strSet = new Set();
  for (let s of str) {
    if (!strSet.has(s)) {
      answer.push(s);
      strSet.add(s);
    }
  }
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
