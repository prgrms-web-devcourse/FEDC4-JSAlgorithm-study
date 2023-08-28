function solution(board) {
  let Max = 0;
  const [row, col] = [board.length, board[0].length];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i > 0 && j > 0 && board[i][j] && board[i - 1][j - 1] && board[i][j - 1] && board[i - 1][j]) {
        board[i][j] = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]) + 1;
      }
      Max = Math.max(Max, board[i][j]);
    }
  }
  return Max ** 2;
}
