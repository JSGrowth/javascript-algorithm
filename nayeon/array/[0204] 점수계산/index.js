function solution(arr) {
  let answer = 0;

  arr.reduce((acc, cur) => {
    if (cur === 1) acc++;
    else acc = 0;
    answer += acc;
    return acc;
  }, 0);
  console.log(answer);
  return answer;
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
