// 풀이시간(소요시간)
// 40분 (5.36ms)

// 아이디어
// 아주 기본적이고 정석적인 DFS풀이 방식
// DFS함수를 만들어 한 노드에 연결된 다음 노드를 탐색하면서 visited를 체크하고, 이미 vistied가 체크되었다면 탐색이 되지않도록 하여 정답을 찾는 방식

// 개선과정
// 딱히 안보임.

console.time(`time`);

class Node {
  val = 0;
  nextArr = [];
  constructor(val) {
    this.val = val;
    this.nextArr = [];
  }
  addNext(nVal) {
    this.nextArr.push(nVal);
  }
  getNext() {
    return this.nextArr;
  }
}

let nodeArr = [];
let ans = 0;
function solution(n, arr) {
  // makeArr
  nodeArr = new Array(n + 1);
  for (let i = 1; i <= n; i++) nodeArr[i] = new Node(i);

  // initialize
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i][0];
    let nextVal = arr[i][1];
    nodeArr[val].addNext(nextVal);
  }

  //   console.log(nodeArr);
  // find ans
  let visited = new Array(n + 1).fill(false);
  visited[1] = true;
  searchDFS(1, visited, `1 ->`);
  return ans;
}

function searchDFS(val, visited, path) {
  let nextArr = nodeArr[val].getNext();
  for (let i = 0; i < nextArr.length; i++) {
    let nVal = nextArr[i];
    if (!nodeArr[nVal] || visited[nVal]) continue;
    if (nVal === 5) ans++;
    // path += `${nVal} ->`;
    visited[nVal] = true;
    searchDFS(nVal, visited, path);
    visited[nVal] = false;
  }
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
