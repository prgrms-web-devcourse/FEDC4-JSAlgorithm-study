function solution(data, col, row_begin, row_end) {
  const answer = [];
  col -= 1;

  data.sort((a, b) => {
    if (a[col] === b[col]) return b[0] - a[0];
    return a[col] - b[col];
  });

  for (let i = row_begin; i < row_end + 1; i++) {
    answer.push(data[i - 1].reduce((acc, cur) => (acc += cur % i), 0));
  }
  return answer.reduce((acc, cur) => (acc ^= cur), 0);
}
