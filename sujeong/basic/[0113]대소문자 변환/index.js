function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      s = s.replace(s[i], s[i].toLowerCase());
    } else {
      s = s.replace(s[i], s[i].toUpperCase());
    }
  }

  return s;
}

let str = "StuDY";
console.log(solution(str));
