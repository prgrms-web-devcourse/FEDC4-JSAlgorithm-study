function solution(n) {
  let answer = 0;
  let field = Array(n).fill('X');

  function check(y, x) {
    for (let i = 0; i < y; i++) {
      if (x === field[i]) return false;
      if (Math.abs(y - i) === Math.abs(field[i] - x)) return false;
    }
    return true;
  }
  function back(y, x) {
    if (y === n - 1) {
      answer++;
      return;
    }
    field[y] = x;

    if (y + 1 < n) {
      for (let i = 0; i < n; i++) {
        if (check(y + 1, i)) back(y + 1, i);
      }
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    back(0, i);
  }
  return answer;
}
