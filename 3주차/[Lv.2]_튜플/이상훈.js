function solution(s) {
  const answer = [];
  const visitied = new Set();
  s = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']')).sort((a, b) => a.length - b.length);

  s.forEach((arr) => {
    arr.forEach((item) => {
      if (!visitied.has(item)) {
        visitied.add(item, true);
        answer.push(item);
      }
    });
  });

  return answer;
}
