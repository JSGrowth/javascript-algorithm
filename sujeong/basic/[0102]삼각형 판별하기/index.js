function solution(a, b, c) {
    let answer;
    // 세변이 같더라도 결과가 나와야하니까. >=t사용
    if (a >= b && a >= c) answer = a < b + c ? "YES" : "NO";
    else if (b >= a && b >= c) answer = b < a + c ? "YES" : "NO";
    else if (c >= a && c >= b) answer = c < a + b ? "YES" : "NO";
    
  return answer;
}

console.log(solution(6, 6, 6));
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
