function solution(a, b) {
  let answer = "";
  for (let l = 0; l < a.length; l++) {
    answer += isOtherWin(a[l], b[l]) + "\n";
  }
  return answer;
}

function isOtherWin(one, other) {
  if (one === other) return "D"; // 비김
  else if (
    (one === 1 && other === 2) ||
    (one === 2 && other === 3) ||
    (one === 3 && other == 1)
  )
    return "B"; //other가 이김
  return "A"; // one이 이김
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
