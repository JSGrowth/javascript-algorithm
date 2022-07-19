function solution(a, b, c){
 let answer = a > b ? b
	 : a < c ? a : c;
 return answer;
}
console.log(solution(2, 5, 1));

