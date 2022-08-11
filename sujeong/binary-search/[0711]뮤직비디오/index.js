// 풀이시간(소요시간)
// 30분(8.03ms)
// 문제 이해가 어려웠다...

// 아이디어
// 백준 나무자르기 문제랑 비슷함 (https://www.acmicpc.net/problem/2805)
// left ~ right를 줄여나가며 dvd의 길이의 따라 들어갈 수 있는 곡의 개수를 m과 비교해 m에 가까워지도록 dvd의 길이(정답)을 좁혀나간다.

// 개선과정
// (딱히 안보임)

console.time(`time`);
function solution(m, songs) {
  let answer = 0;
  let left = Math.max(...songs); // left는 songs의 가장 큰 수와 같다. (가장 작더라도 하나의 곡은 포함해야할테니(굳이 0부터 시작할 필요가 없다))
  let right = songs.reduce((acc, cur) => acc + cur, 0); // right는 모든 songs가 한 dvd에 들어갈 때인 songs의 sum이다.
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (countDVD(mid, songs) <= m) {
      answer = mid;
      right = mid - 1;
      //   console.log(`left : ${left} right : ${right} mid : ${mid}`);
    } else {
      left = mid + 1;
      //   console.log(`left : ${left} right : ${right} mid : ${mid}`);
    }
  }
  return answer;
}
function countDVD(pivotLength, songs) {
  let dvdCount = 1,
    dvdLength = 0;
  for (let i = 0; i < songs.length; i++) {
    dvdLength += songs[i];
    if (dvdLength > pivotLength) {
      dvdCount++;
      dvdLength = songs[i];
    }
  }
  return dvdCount;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
console.timeEnd("time");
