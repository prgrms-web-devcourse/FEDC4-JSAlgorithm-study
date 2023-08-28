function solution(datas, col, row_begin, row_end) {
  return datas
    .sort((a, b) => (a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]))
    .reduce(
      (acc, cur, idx) =>
        acc ^
        (row_begin <= idx + 1 && idx + 1 <= row_end
          ? cur.reduce((curAcc, curCur) => curAcc + (curCur % (idx + 1)), 0)
          : 0),
      0,
    );
}
