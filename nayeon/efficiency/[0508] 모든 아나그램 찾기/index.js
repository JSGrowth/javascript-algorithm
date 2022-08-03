console.time("time");
function compareMaps(map1, map2) {
  for (let [key, value] of map1) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  const sMap = new Map();
  const tMap = new Map();

  for (let ch of t) {
    if (!tMap.has(ch)) tMap.set(ch, 1);
    else tMap.set(ch, tMap.get(ch) + 1);
  }
  let ptr = 0;
  while (ptr < t.length) {
    const ch = s[ptr++];
    if (!sMap.has(ch)) sMap.set(ch, 1);
    else sMap.set(ch, sMap.get(ch) + 1);
  }
  while (ptr <= s.length) {
    if (compareMaps(tMap, sMap)) answer++;
    if (ptr == s.length) break;

    const lt = s[ptr - t.length];
    const rt = s[ptr];

    if (sMap.get(lt) === 1) sMap.delete(lt);
    else sMap.set(lt, sMap.get(lt) - 1);
    if (!sMap.has(rt)) sMap.set(rt, 1);
    else sMap.set(rt, sMap.get(rt) + 1);
    ptr++;
  }
  return answer;
}
let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
console.timeEnd("time");
