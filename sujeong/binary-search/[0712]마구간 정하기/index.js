// 풀이시간(소요시간)
// 34분(4.637ms)

// 아이디어
// 가장 가까운 두 말(점)의 거리를 최대로 만드는 문제이다.
// 1. 점의 좌표를 정렬한다.
// 2. 점과 점 사이의 거리를 좁혀나가기 위해 겹치지않기에 minDist에 1을 설정하고, maxDist에 양극단의 거리 차를 설정한다.
// 3. minDist와 maxDist의 중앙값인 midDist를 구해 midDist의 최소거리를 유지할 때 몇개의 말을 넣을 수 있는지 countSWH로 계산하여 목표인 c를 만족할 때까지 반복한다.

// 개선과정
// (딱히 안보임)

console.time(`time`);
function solution(c, stable) {
  stable.sort((a, b) => a - b);
  let answer = 0;
  let minDist = 1; // 가까워도 같은 점에 위치할 수는 없기에 1을 설정
  let maxDist = stable[stable.length - 1] - stable[0]; // 극과 극으로 떨어져있을 때를 가정해 양 극단의 거리로 설정

  while (minDist <= maxDist) {
    let midDist = Math.floor((minDist + maxDist) / 2);
    if (countSWH(midDist, stable) >= c) {
      answer = midDist;
      minDist = midDist + 1;
    } else {
      maxDist = midDist - 1;
    }
    // console.log(`min: ${min}, max: ${max}, midDist: ${midDist}`);
  }
  return answer;
}

// Method (minDist이상의 거리를 확보할때 몇개의 말이 마구간에 들어갈 수 있는지 계산하는 함수)
function countSWH(dist, stable) {
  let horsePoints = [stable[0]]; // 말의 좌표를 저장할 배열
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - horsePoints.at(-1) >= dist) {
      horsePoints.push(stable[i]);
    }
  }
  //   console.log(`horsePoints: ${horsePoints}`);
  return horsePoints.length;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
console.timeEnd("time");
