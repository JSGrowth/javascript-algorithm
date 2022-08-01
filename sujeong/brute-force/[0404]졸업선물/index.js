// Time Taken :
// 40m(전에 백준에서 풀었던 나무 절단기 높이 설정하던 문제랑 비슷함.)

// Sol1 :
// 1) 정렬
// 2) 할인 대상 지정
// 3) 할인 대상 + 다른 애들해서 m 안넘는지 체크하여 넘는 것중 가장 많은 선물을 구매할 수 있을때의 수를 갱신해감.

function solution(m, product) {
  // 할인들어갔을 때 금액이 큰 아이부터 해서 적은 횟수로 빨리빨리 걸러내자 + 할인시의 금액까지 2번인덱스에 추가
  // issue1 => 할인을 반영한 금액으로 정렬하는 것과 기본 금액으로 정렬하는 것 중 어떤게 더 효율적일까? (+ 모든 상황에서도 동일하게 한 상황이 효율성이 더 높을까?)
  product.sort(
    (a, b) =>
      (b[2] = Math.floor(b[0] / 2) + b[1]) -
      (a[2] = Math.floor(a[0] / 2) + a[1])
  );

  let maxCnt = 0;
  for (let i = 0; i < product.length; i++) {
    let saledProduct = product[i];
    let sum = saledProduct[2], // 할인시의 금액을 담아둠.
      count = 1; // 할인된 아이는 미리 들어있으니 1부터 시작
    for (let j = 0; j < product.length; j++) {
      let otherProduct = product[j];
      if (i === j) continue;
      if (sum > m) break;
      sum += otherProduct[0] + otherProduct[1];
      count++;
    }
    maxCnt = Math.max(maxCnt, count);
  }
  return maxCnt;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
