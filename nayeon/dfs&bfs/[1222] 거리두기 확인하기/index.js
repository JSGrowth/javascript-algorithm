function solution(places) {
  const MAX_GAP = 2;
  let answer = new Array(places.length).fill(0);

  function find_p(place, i, j, dist, visited) {
    visited[i][j] = 1;

    if (dist > MAX_GAP) return false;
    if (place[i][j] === "P" && dist > 0) return true;

    const di = [0, 1, 0, -1];
    const dj = [-1, 0, 1, 0];

    for (let k = 0; k < 4; k++) {
      const next_i = i + di[k];
      const next_j = j + dj[k];

      if (
        next_i >= 0 &&
        next_j >= 0 &&
        next_i < 5 &&
        next_j < 5 &&
        visited[next_i][next_j] !== 1 &&
        place[next_i][next_j] !== "X"
      ) {
        if (find_p(place, next_i, next_j, dist + 1, visited)) return true;
      }
    }
    return false;
  }

  function search(place) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // const visited = new Array(5).fill(new Array(5).fill(0));
        const visited = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];

        if (place[i][j] === "P" && find_p(place, i, j, 0, visited)) return 0;
      }
    }
    return 1;
  }
  answer = answer.map((_, idx) => search(places[idx]));

  return answer;
}

// solution([
//   ["PXOOP", "XPXOX", "PXXPX", "XOXOX", "POXXP"],
//   ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//   ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//   ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
//   ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
// ]); //[1, 0, 1, 1, 1]

// solution([
//   ["POPXP", "XPXPX", "PXPXP", "XPXPX", "PXPOP"],
//   ["XXXXX", "XXXXX", "XPOXP", "XXXXX", "XPXOP"],
//   ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//   ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//   ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
// ]); //[1, 0, 1, 1, 0] // 0 1 0 1 1

solution([
  ["OPOOP", "PXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]); // [0, 0, 1, 1, 1]
