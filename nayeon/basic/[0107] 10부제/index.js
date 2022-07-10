function solution(day, arr) {
  let answer = arr.reduce((acc, cur) => {
    console.log(acc);
    if (cur.toString().slice(-1) === day.toString()) return acc + 1;
    else return acc;
  }, 0);
  return answer;
}
