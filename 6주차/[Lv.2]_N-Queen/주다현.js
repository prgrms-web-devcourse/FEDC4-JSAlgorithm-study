let count = 0;

// 퀸의 위치가 괜찮은지 확인하는 함수
// row: 놓아진 퀸의 행
function check(board, row) {
  // 입력된 곳까지 이전 말의 열 위치 확인
  for (let i = 0; i < row; i++) {
    if (board[i] === board[row] || Math.abs(board[row] - board[i]) === row - i) {
      return false;
    }
  }
  return true;
}
// 퀸을 놓는 함수
// row: 놓아진 퀸의 행
function putQueen(board, row, n) {
  // 주어진 n만큼 퀸이 놓여지면 횟수 세기
  if (row === n) {
    count += 1;
    return;
  } else {
    // 퀸 놓기
    // 각 행에 퀸 놓기
    // i: 열변호
    for (let i = 0; i < n; i++) {
      board[row] = i;
      // 해당 위치가 괜찮은지 확인
      if (check(board, row)) {
        putQueen(board, row + 1, n);
      }
    }
  }
}

function solution(n) {
  // 체스판을 표현하는 1차원 배열
  // 0: 빈 칸
  // index: 퀸이 놓인 행, value: 퀸이 놓인 열
  const board = new Array(n).fill(0);
  putQueen(board, 0, n);
  return count;
}
