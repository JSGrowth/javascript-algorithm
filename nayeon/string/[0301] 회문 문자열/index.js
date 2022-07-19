function solution(string) {
  const str = string.toLowerCase();
  const r_str = str.split("").reverse().join("");
  return str === r_str ? "YES" : "NO";
}

console.log(solution("gooG"));
