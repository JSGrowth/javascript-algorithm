// Time taksen : 4hours (배열이 2개가 되니까... 야밤에 3시간 머리 싸매고 풀었다... 난 개똥벌레다...)
// Sol1 :
//  0) 초반에는 모든 멘토멘티 조합이 가능하기에 arr을 true로 채워서 초기화
//  1) 각 시험마다 visited배열을 만들어 각 시험에서 멘티가 될 수 없는 사람들을 차례로 담아감.
//  2) 1등인 student부터 1~n의 학생을 데려와 visited에 없다면 false로 값을 바꿔 이 조합은 불가능함을 명시하는 `menti 케이스 검증`을 진행
//  3) `menti 케이스 검증` 이후 student를 visited에 넣어 다음 등수 학생을 체크할 땐 자기보다 높은 등수의 학생의 멘토가 될 수 없도록 함.
//  4) 다 돈 뒤 true의 개수를 구하고 리턴

function solution(test) {
  // initialize
  let n = test[0].length; // 학생 수
  let m = test.length; // 시험횟수
  let arr = new Array(n).fill(new Array(n).fill(true)); // [멘티][멘토] 멘토와 멘티관계가 성립되면 true

  // Logic
  for (let unit = 0; unit < m; unit++) {
    let visited = []; // 이미 멘티 케이스를 검증한 사람들
    for (let rank = 0; rank < n; rank++) {
      let student = test[unit][rank];

      // menti case 검증
      let mentorCase = arr[student - 1];
      arr[student - 1] = mentorCase.map((menti, index) => {
        if (visited.includes(index)) return menti;
        return false;
      });
      visited.push(student - 1);
    }
  }

  // Output
  let answer = 0;
  arr.forEach((element) => {
    element.forEach((item) => {
      if (item) answer++;
    });
  });
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
