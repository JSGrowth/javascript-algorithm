const Game = {
  Rock: 1,
  Scissor: 2,
  Paper: 3,
};
Object.freeze(Game);

function isWin(my, your) {
  if (my === your) return -1;
  if (my === Game.Rock) return your === Game.Scissor ? 0 : 1;
  if (my === Game.Scissor) return your === Game.Paper ? 0 : 1;
  if (my === Game.Paper) return your === Game.Rock ? 0 : 1;
}

function solution(a, b) {
  const answer = [];
  for (let i = 0; i < a.length; i++) {
    const result = isWin(a[i], b[i]);
    if (result === -1) answer.push("D");
    else if (result === 1) answer.push("A");
    else if (result === 0) answer.push("B");
  }
  console.log(answer);
  return answer;
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
