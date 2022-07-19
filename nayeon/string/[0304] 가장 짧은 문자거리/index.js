function solution(s, t) {
  let answer = "";
  const arr = s.split("");
  const t_index = [];

  arr.forEach((value, index) => value === t && t_index.push(index));
  arr.forEach((value, index) => {
    if (value === "e") answer += 0;
    else
      answer += Math.min(...t_index.map((v) => Math.abs(parseInt(v - index))));
  });
  answer = answer.split("").join(" ");
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
