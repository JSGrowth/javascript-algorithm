function solution(_, arr) {
  const answer = arr.filter((nbr, i) => !i || nbr > arr[i - 1]);
  console.log(answer);
  return answer;
}

solution(6, [7, 3, 9, 5, 6, 12]);
