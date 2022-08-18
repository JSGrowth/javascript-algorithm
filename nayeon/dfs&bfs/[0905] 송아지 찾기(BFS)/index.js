function solution(s, e) {
  const queue = [];

  queue.push(s);
  queue.push(0);
  while (queue.length) {
    const ps = queue.shift();
    const cnt = queue.shift();

    for (const nps of [ps + 1, ps - 1, ps + 5]) {
      if (nps === e) return cnt + 1;
      queue.push(nps);
      queue.push(cnt + 1);
    }
  }
}

console.log(solution(5, 14));
console.log(solution(8, 3));
