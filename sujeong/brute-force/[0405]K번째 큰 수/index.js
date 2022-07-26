// Time Taken:
// 40m (정렬 + 중복 불가 + keyvalue조합 => Map))

// Sol1 :
// 1) n장 중에 3장을 골라 합을 구해 Set에 넣는다.
// 2) Set에서 k번째로 큰 수를 구해 리턴한다.
function solution(n, k, card) {
  // Logic
  let map = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = card[i] + card[j] + card[k];
        if (map.has(sum)) {
          map.set(sum, map.get(sum) + 1);
        } else map.set(sum, 1);
      }
    }
  }

  // Output
  let sortedKeys = [...map.keys()].sort((a, b) => b - a);
  let answer = sortedKeys[0];
  for (let keyIdx = 0; keyIdx < sortedKeys.length; keyIdx++) {
    answer = sortedKeys[keyIdx];
    let cnt = map.get(answer);
    if ((k -= cnt) <= 0) break;
  }
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
