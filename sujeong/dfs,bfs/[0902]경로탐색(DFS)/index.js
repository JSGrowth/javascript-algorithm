// 풀이시간(소요시간)
// 40분 (5.36ms)

// 아이디어
// 아주 기본적이고 정석적인 DFS풀이 방식
// DFS함수를 만들어 한 노드에 연결된 다음 노드를 탐색하면서 visited를 체크하고, 이미 vistied가 체크되었다면 탐색이 되지않도록 하여 정답을 찾는 방식

// 개선과정
// 1.for문에서 val을 받아 nextArr을 가져오는 방식에서 cont[val, nVal]로 한번에 가져오도록 변경
// 2. nodeArr을 미리 만들고 진행하는 방식에서 nodeArr에 추가가 있을때만 만드는 방식으로 변경

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
  // Initialize
  nodeArr = new Array(n + 1);
  for (const [val, nVal] of arr) {
    if (!nodeArr[val]) nodeArr[val] = new Node(val);
    nodeArr[val].addNext(nVal);
  }

  // Logic
  let visited = new Array(n + 1).fill(false);
  function searchDFS(val) {
    if (!nodeArr[val]) return;
    let nextArr = nodeArr[val].getNext();
    for (let i = 0; i < nextArr.length; i++) {
      let nVal = nextArr[i];
      if (visited[nVal]) continue;
      if (nVal === n) ans++;
      visited[nVal] = true;
      searchDFS(nVal);
      visited[nVal] = false;
    }
  }
  // find ans
  visited[1] = true;
  searchDFS(1);
  return ans;
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
