function solution(board) {
  const rowLen = board.length;
  const colLen = board[0].length;
  let answer = 0;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (!board[i][j]) {
        continue;
      }

      board[i][j] = Math.min(getBoardValue(i - 1, j), getBoardValue(i, j - 1), getBoardValue(i - 1, j - 1)) + 1;

      answer = Math.max(answer, board[i][j]);
    }
  }

  function getBoardValue(i, j) {
    if (i < 0 || j < 0) {
      return 0;
    }

    return board[i][j];
  }

  return answer ** 2;
}
