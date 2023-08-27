function solution(board) {
  const rowLen = board.length;
  const colLen = board[0].length;
  let answer = 0;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (i > 0 && j > 0 && board[i][j]) {
        board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }

      answer = Math.max(answer, board[i][j]);
    }
  }

  return answer ** 2;
}
