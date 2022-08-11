// 풀이시간 (코드 소요시간)
// 25분 (6.541ms)

// 아이디어
// 1. 숫자가 나오면 numStack에 값을 넣는다
// 2. 숫자가 아닌 연산자가 나오면 numStack에서 두 값을 pop하여 연산자와 eval을 통해 계산을 한다(+,-,*,/만 나오는 간단한 프로그램이라 사용함)

// 개선과정
// (지금은 딱히 안보인다..)

console.time("time");
function solution(s) {
    let numStack = [];
    let sChars = s.split("");
    for (let i = 0; i < s.length; i++) {
        let cur = sChars[i];
        if (!isNaN(cur)) {
            numStack.push(cur);
            // console.log("add cur: ", cur);
        } else {
            let num1 = numStack.pop();
            let num2 = numStack.pop();
            numStack.push(eval(num2 + cur + num1));
            // console.log("calculate: ", num2, cur, num1);
        }
    }
    return numStack.pop();
}

let str = "352+*9-";
console.log(solution(str));
console.timeEnd("time");
