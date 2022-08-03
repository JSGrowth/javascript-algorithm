console.time("time");
function solution(str1, str2) {
  const hash1 = new Map();
  const hash2 = new Map();

  if (str1.length !== str2.length) return "NO";
  for (let i = 0; i < str1.length; i++) {
    if (!hash1.has(str1[i])) hash1.set(str1[i], 1);
    else hash1.set(str1[i], hash1.get(str1[i]) + 1);

    if (!hash2.has(str2[i])) hash2.set(str2[i], 1);
    else hash2.set(str2[i], hash2.get(str2[i]) + 1);
  }
  for (let [key, value] of hash1) {
    console.log(key, value);
    console.log(hash2.get(key));
    if (!hash2.has(key)) return "NO";
    if (hash2.get(key) !== value) return "NO";
  }
  return "YES";
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
console.timeEnd("time");
