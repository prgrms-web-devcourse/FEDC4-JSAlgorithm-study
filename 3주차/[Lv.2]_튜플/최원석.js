function solution(s) {
  return JSON.parse(s.replace(/\{|\}/g, (match) => (match === '{' ? '[' : ']')))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => [...acc, ...cur.filter((v) => !acc.includes(v))], []);
}
