function solution(data, col, row_begin, row_end) {
  let result = 0;
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1];
    }
  });

  data.map((v, i) => {
    if (i >= row_begin - 1 && i <= row_end - 1) {
      result ^= v.reduce((acc, cur) => {
        return acc + (cur % (i + 1));
      }, 0);
    }
  });

  return result;
}
