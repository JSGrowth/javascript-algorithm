// 풀이시간(소요시간)
// 20ns(5.159ms)

// 아이디어
// Sol1. 이건 efficiency에 나온 문제들의 유형(부분집합(연속됨) 구하기, 아나그램(글자수도 동일한 점을 이용하자.))을 짬뽕한 것 같음.
//        1) s에서 t크기의 부분집합을 구한다. (= makeMap)
//        2) anagram이 성립하는지 체크한다. (= checkAnagram)
//        3) 체크하면 answer++을 한다.

// 개선과정
// (딱히 개선할게 안보임)

console.time("time");
function makeMap(str) {
  let map = new Map(),
    strLength = str.length;
  for (let i = 0; i < strLength; i++)
    map.set(str.at(i), map.get(str.at(i)) + 1 || 1);
  return map;
}
function checkAnagram(map1, map2) {
  for (let k of map1.keys()) if (map1.get(k) !== map2.get(k)) return false;
  return true;
}
function solution(s, t) {
  // 부분집합 만들기
  const tLength = t.length,
    sLength = s.length;
  const tMap = makeMap(t);
  let answer = 0;
  for (let i = 0; i < sLength - (tLength - 1); i++) {
    let tmpMap = makeMap(s.slice(i, i + tLength));
    if (checkAnagram(tmpMap, tMap)) answer++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

let c = "RededitorEditit";
let d = "ti";
console.log(solution(c, d));
console.timeEnd("time");
