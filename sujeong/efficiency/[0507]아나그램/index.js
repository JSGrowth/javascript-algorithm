// 풀이시간(소요시간)
// 8분 (예시 3개 5.803ms)

// 아이디어
// Sol1. Map을 이용해 key value로 알파벳(대소구분)에 대한 개수를 저장하고 그 수를 비교한다.

// 개선과정
// (지금은 개선할 게 안보임..)

console.time("time");
function solution(str1, str2) {
  let str1Arr = new Map(),
    str2Arr = new Map();
  for (let i = 0; i < str1.length; i++) {
    str1Arr.set(str1[i], str1Arr.get(str1[i]) + 1 || 1); 
    str2Arr.set(str2[i], str2Arr.get(str2[i]) + 1 || 1);
  }
  for (let k of str1Arr.keys()) {
    if (str1Arr.get(k) !== str2Arr.get(k)) return "NO";
  }
  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));

let c = "abaCC";
let d = "Caaab";
console.log(solution(c, d));

let lesserafim = "LESSERAFIM";
let imfearless = "IMFEARLESS";
console.log(solution(lesserafim, imfearless));

console.timeEnd("time");
