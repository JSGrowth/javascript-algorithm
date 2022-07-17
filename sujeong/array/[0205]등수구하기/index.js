function solution(arr) {
    let answer = [];
    let copy = [...arr]; // JS에서 배열복사는 이렇게 한다!!
    copy.sort((a, b) => b - a); // JS에서 배열 정렬은 이렇게 한다!!
    arr.forEach(element => {
        answer.push(copy.indexOf(element) + 1);
    });

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
