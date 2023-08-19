function solution(n) {
  const queens = Array.from({ length: n }, () => 0);
  return backtrack(0);

  function backtrack(row) {
    let count = 0;

    if (row === n) return 1;

    for (let col = 0; col < n; col++) {
      queens[row] = col;
      if (!isPromising(row)) continue;
      count += backtrack(row + 1);
    }

    return count;
  }

  function isPromising(row) {
    for (let col = 0; col < row; col++) {
      if (queens[row] === queens[col]) return false;
      if (Math.abs(queens[row] - queens[col]) === row - col) return false;
    }

    return true;
  }
}
