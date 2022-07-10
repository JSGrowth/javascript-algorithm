function solution(arr) {
  let answer = "";
  let max = 0;
  arr.forEach((value) => {
    if (value.length > max) {
      answer = value;
      max = value.length;
    }
  });
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
