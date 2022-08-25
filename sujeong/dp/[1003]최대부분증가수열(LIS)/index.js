// 풀이시간(소요시간)
// 40분(7.64ms)

// 아이디어
// 1. dp에 일단 arr[i]를 가진 1차원 배열을 각 인덱스에 넣어준다.
// 2. 1~arr.length까지의 i를 반복하면서 i~0까지의 dp값+1과 현재 dp[i]를 비교하며 길이가 길어지는 방향으로 dp[i]를 키워나간다.
// 3. dp에서 가장 길이가 긴 배열을 가진 배열의 길이를 반환한다.

// 개선과정
// Initialize와 Output 부분을 개선해나가고 싶다..

console.time(`time`);
function solution(arr) { 
    // Initialize
    let dp = new Array(arr.length); // arr의 각 요소와 1:1로 매칭되어 그 요소까지 도달할 수 있는 경우의 수를 담는다.
    for (let i = 0; i < arr.length; i++)dp[i] = [arr[i]];
    // Logic
    for (let i = 1; i < arr.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (arr[j] < arr[i] && dp[i].length < dp[j].length + 1) {
                dp[i] = [...dp[j], arr[i]];
            }
        }
    }
    // Output
    let answer = 0;
    for (let v of dp) answer = Math.max(v.length, answer);
    return answer;
}
// let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
console.timeEnd('time');