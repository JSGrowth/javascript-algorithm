function solution(arr) {
  let answer = 0;
  let cont = 1;
  arr.forEach((elem) => {
    if (elem === 1) answer += cont++;
    else cont = 1;
  });
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
