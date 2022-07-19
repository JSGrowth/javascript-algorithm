function solution(arr) {
  let answer = 0;
  let max = 0;

  arr.forEach((nbr) => {
    if (max < nbr) {
      answer++;
      max = nbr;
    }
  });
  console.log(answer);
  return answer;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);
