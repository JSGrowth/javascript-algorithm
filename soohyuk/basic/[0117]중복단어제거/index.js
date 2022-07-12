function solution(s){
	const wordSet = new Set();
	for(const value of s)
		wordSet.add(value);
	
  return wordSet;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
