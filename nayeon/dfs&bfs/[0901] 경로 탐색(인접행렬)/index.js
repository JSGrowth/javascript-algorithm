// time: 6.819ms
console.time("time");
function solution(n, arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  function dfs(path, set, p) {
    let cnt = 0;
    const checkSet = new Set(set);
    const paths = arr.filter((v) => v[0] === path[1]);

    if (paths.length === 0) return cnt;
    checkSet.add(path[1]);
    p += `${path[1]} -> `;

    paths.forEach((sp) => {
      if (sp[1] === n) {
        console.log(p + `${sp[1]}`);
        cnt++;
      } else if (!checkSet.has(sp[1])) cnt += dfs(sp, checkSet, p);
    });
    if (cnt === 0) checkSet.delete(path[1]);
    return cnt;
  }
  arr
    .filter((v) => v[0] === 1)
    .forEach((sp) => {
      answer += dfs(sp, [1], "1 -> ");
    });
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
console.timeEnd("time");
