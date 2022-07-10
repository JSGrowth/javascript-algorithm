function solution(s) {
  let answer = 0;
  answer = s.match(/[A-Z]/g).length;
  return answer;
}

solution("KoreaTimeGood");
