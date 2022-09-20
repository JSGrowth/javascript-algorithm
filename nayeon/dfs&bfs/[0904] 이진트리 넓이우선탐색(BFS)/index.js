function solution() {
  let answer = "";
  const queue = [];

  queue.push(1);
  while (queue.length) {
    const node = queue.shift();
    answer += `${node} `;
    for (const nv of [node * 2, node * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
