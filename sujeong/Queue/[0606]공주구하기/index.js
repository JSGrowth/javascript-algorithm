// 풀이시간 (코드 소요시간)
// 43분(10.592ms)

// 아이디어
// 1. arr에 인덱스를 넣어 초기화를 한다.
// 2. while문을 돌면서 cnt%k 가 0이 되면 arr에서 index번째 요소를 제거한다.
// 3. while문을 돌면서 cnt%k 가 0이 아니라면 index를 증가시키고, index가 n을 넘어가면 index를 0으로 바꾼다.
// 4. 결과적으로 남은 값을 출력한다.

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(n, k) {
  // initialize
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let cnt = 1,
    index = 0;
  while (arr.length > 1) {
    if (cnt++ % k === 0) arr.splice(index, 1);
    else index + 1 === n ? (index = 0) : index++;
  }
  return arr[0];
}

console.log(solution(8, 3));
console.timeEnd("time");
