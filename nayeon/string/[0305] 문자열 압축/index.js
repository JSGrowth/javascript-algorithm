function solution(string) {
  let answer = "";
  const arr = [];
  let stash = "";

  for (const chr of string) {
    console.log(arr.at(-1));
    if (chr !== stash) {
      arr.push(chr);
      stash = chr;
    } else if (Number.isInteger(arr.at(-1))) {
      arr[arr.length - 1] = parseInt(arr.at(-1)) + 1;
    } else {
      arr.push(2);
    }
  }
  answer = arr.join("");
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
