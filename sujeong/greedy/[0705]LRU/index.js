// 풀이시간(소요시간)
// 8분 (11.88ms)

// 아이디어
// Solution 1. 문제대로 cache 배열에 task가 없다면 맨 앞에 추가하고, task가 있다면 제거 후 맨 앞으로 가져오기

// 개선과정
// (unshift는 배열을 다 밀어서 만들어지기에 시간 복잡도가 높다.)
// 작업번호가 1~100밖에 되지 않기 때문에, 배열을 옮기는 방식이 아닌 출력하는 포인터를 옮기는 방식으로 구성해 unshift로 소비되는 시간을 줄여봐야할 듯.
// => 아직 풀진 않았지만 개선이 필요하다.

console.time("time");
function solution(size, arr) {
  // (캐시의 크기, 작업번호 처리 순)
  let cache = new Array(size).fill(0);

  for (let task of arr) {
    if (cache.includes(task)) {
      cache.splice(cache.indexOf(task), 1);
      cache.unshift(task);
    } else {
      cache.unshift(task);
      cache.pop();
    }
    // console.log(cache)
  }
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
console.timeEnd("time");
