function solution(s, t) {
  // SOL1. 한번에 s에서 t를 찾고, 그 뒤 거리를 구함
  // => 2O(n)이 되어 시간복잡도가 높음.

  // SOL2. 배열을 만들어 E가 발견되면 그 주변을 변해나감.(회전은 1번만 할 수 있다)
  // 공간복잡도는 높아지겠지만 요즘은 시간복잡도가 비교적 더 중요하니까 이 방식을 사용

  let ansArr = new Array(s.length).fill(Number.MAX_SAFE_INTEGER); // answer정보를 담을 Array
  let recent = 0; // 최근의 t
  let dist = 1; // t와의 거리

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      // (re)initial left-neighbor
      for (let j = 1; j <= dist; j++) {
        ansArr[i - j] = ansArr[i - j] > j ? j : ansArr[i - j];
      }
      // initial self
      ansArr[i] = 0;
      recent = i;
      dist = 1;
    } else {
      ansArr[i] = dist;
      ansArr[recent - dist] =
        ansArr[recent - dist] > dist ? dist : ansArr[recent - dist];
      dist++;
    }
  }
  // Result value processing
  let retVal = "";
  ansArr.map((x) => (retVal += x + " "));
  return retVal;
}

let str = "teachermode";
console.log(solution(str, "e"));
