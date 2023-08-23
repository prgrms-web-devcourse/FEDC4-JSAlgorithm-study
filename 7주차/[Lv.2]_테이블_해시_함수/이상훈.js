function solution(data, col, row_begin, row_end) {
  data = data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

  const s = data
    .map((tuple, _i) => {
      const i = _i + 1;
      if (i >= row_begin && i <= row_end) {
        return tuple.reduce((acc, value) => acc + (value % i), 0);
      } else {
        return null;
      }
    })
    .filter((item) => item != null);

  return s.reduce((acc, value) => acc ^ value, 0);
}
