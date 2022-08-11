// 풀이시간 (코드 소요시간)
// 57분 43초 (5.952ms)

// 아이디어
// 1. moves에서 자리를 확인하고 board에서 그 값을 pop해 stack에 넣는다.
// 2. stack에 넣을 땐, 가장 최근의 값을 pop하여 비교하고, 같다면 pop한채로 answer+=2 를 해주고 다르다면 pop한 값을 다시 stack에 넣고 종료

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(board, moves) {
  let n = board.length; // n x n board
  let stack = []; // 뽑은 인형들이 모여있을 곳
  let answer = 0; // 터져버린 개수

  let topLine = new Array(5); // 각 줄에서 맨 윗줄의 인형 인덱스를 저장 (for문으로 계속 타고내려가면 시간 복잡도가 너무 높다.)
  for (curMove of moves) {
    // (맨윗줄 없을 경우 탐색)
    if (topLine[curMove - 1] === undefined) {
      for (let i = 0; i < n; i++) {
        if (board[i][curMove - 1] !== 0) {
          topLine[curMove - 1] = i;
          break;
        }
      }
    }
    if (topLine[curMove - 1] === n) continue; // 뽑힐 인형이 없다면 다음으로 넘어감 (topLine이 맨 마지막)
    // pop from stack
    let stacktop = stack.pop();
    // pop from board
    let curDoll = board[topLine[curMove - 1]][curMove - 1];
    board[topLine[curMove - 1]][curMove - 1] = 0;
    topLine[curMove - 1] += 1;

    // compare
    if (stacktop === curDoll) answer += 2;
    else if (stacktop === undefined) stack.push(curDoll);
    else stack.push(stacktop, curDoll);
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
console.timeEnd("time");
