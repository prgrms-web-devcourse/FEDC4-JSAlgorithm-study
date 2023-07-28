function solution(s) {
  const arr = JSON.parse(s.replace(/[\{\}]/g, (str) => (str === '{' ? '[' : ']'))).sort((a, b) => a.length - b.length);
  return arr.reduce((acc, cur) => [...acc, ...cur.filter((item) => !acc.includes(item))], []);
}
