function solution(s) {
  // Logic
  // 객체는 넣은 순서대로 출력이 유지된다는 점을 이용
  let items = {};
  for (let i = 0; i < s.length; i++) {
    s[i] in items ? items[s[i]]++ : (items[s[i]] = 1);
  }

  // Output
  let retVal = "";
  Object.entries(items).forEach((element) => {
    retVal += element[0] + (element[1] == 1 ? "" : element[1]);
  });
  return retVal;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
