function solution(begin, target, words) {
  let answer = 0;
  const queue = [];
  const ch = Array.from({ length: words.length }, (_) => 0);
  queue.push([begin, 0]);

  const compare = (w1, w2) => (w1.split('').reduce((ac, v, i) => ac + (v !== w2[i] ? 1 : 0), 0) === 1 ? true : false);

  while (queue.length) {
    const [cur, cnt] = queue.shift();
    if (cur === target) {
      answer = cnt;
      break;
    }
    for (const i in words) {
      if (ch[i] === 0) {
        const word = words[i];
        if (compare(cur, word)) {
          ch[i] = 1;
          queue.push([word, cnt + 1]);
        }
      }
    }
  }

  return answer;
}
