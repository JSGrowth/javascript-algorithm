function solution(arr) {
  let answer = [0, 0];

  const sum = arr.reduce((acc, cur) => {
    if (cur % 2 != 0) {
      if (answer[1] == 0 || answer[1] > cur) answer[1] = cur;
      return acc + cur;
    } else return acc;
  }, 0);
  answer[0] = sum;
  return answer;
}
