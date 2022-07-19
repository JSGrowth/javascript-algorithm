function solution(string) {
  const str = string.toLowerCase();
  const r_str = str.split("").reverse().join("");
  console.log(str);
  console.log(r_str);
  return str === r_str ? "YES" : "NO";
}

let str1 = "found7, time: study; Yduts; emit, 7Dnuof";
let str = "fuck";
console.log(solution(str));
