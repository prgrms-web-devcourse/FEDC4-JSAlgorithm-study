function solution(begin, target, words) {
  let answer = 0;
  if (!words.includes(target)) return 0;

  let visited = new Set();
  let q = [begin];
  let level = 1;

  while (q.length) {
    const word = q.shift();
    level--;
    visited.add(word);

    if (word === target) return answer;

    for (let i = 0; i < word.length; i++) {
      const letter = word.slice(0, i) + word.slice(i + 1);
      const matched = words.filter((v) => !visited.has(v) && v.slice(0, i) + v.slice(i + 1) === letter);

      matched.forEach((match) => {
        visited.add(match);
        q.push(match);
      });
    }

    if (level === 0) {
      level = q.length;
      answer++;
    }
  }

  return 0;
}
