function solution(s){  
	let answer="";
	for(const letter of s){
		if(letter === letter.toUpperCase()) answer += letter;
		else answer += letter.toUpperCase();
	}
	return answer;
}

console.log(solution("StuDY"));
