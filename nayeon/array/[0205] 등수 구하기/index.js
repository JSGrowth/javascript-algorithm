function solution(arr) {
  let answer = "";
  const grade = [...arr].sort((a, b) => b - a);

  arr.forEach((score) => {
    const rank = grade.indexOf(score) + 1;
    answer += rank + " ";
  });
  console.log(answer);
  return answer;
}

solution([87, 89, 92, 100, 76]);
