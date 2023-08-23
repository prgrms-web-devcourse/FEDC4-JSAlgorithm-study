function solution(board) {
  let max = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) continue;

      board[i][j] = Math.min(getValue(i - 1, j), getValue(i, j - 1), getValue(i - 1, j - 1)) + 1;
      max = Math.max(max, board[i][j]);
    }
  }

  function getValue(y, x) {
    if (y < 0 || y > board.length - 1) return 0;
    if (x < 0 || x > board[0].length - 1) return 0;
    return board[y][x];
  }

  return max ** 2;
}
