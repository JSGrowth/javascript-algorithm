function solution(str) {
  const nbr = str.match(/[0-9]/g).join("");
  const answer = parseInt(nbr);
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
