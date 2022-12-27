function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

function solution(w, h) {
  let square = 0;
  const block_cnt = getGCD(w, h);
  const block_size = w / block_cnt;

  for (let x = 1; x < w; x++) {
    square += Math.floor((h / w) * x);
  }
  square *= 2;

  return square;
}
