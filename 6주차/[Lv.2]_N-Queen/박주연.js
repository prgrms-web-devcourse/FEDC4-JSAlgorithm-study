function solution(n) {
  let cnt = 0;

  //배치 조건을 검사 함수
  function checkLocation(chess, row) {
    for (let i = 1; i < row; i++) {
      //열이 같을 때 + 대각선
      if (chess[i] === chess[row] || Math.abs(i - row) === Math.abs(chess[i] - chess[row])) return false;
    }
    return true;
  }

  function locateQueen(chess, row) {
    if (row === chess.length - 1) {
      cnt += 1;
    } else {
      for (let i = 1; i < chess.length; i++) {
        chess[row + 1] = i;
        if (checkLocation(chess, row + 1)) locateQueen(chess, row + 1);
      }
    }
  }

  //1차원 배열로 생각(index= 행, value = 열)
  for (let i = 1; i < n + 1; i++) {
    const chess = Array.from({ length: n + 1 }, () => 0);
    chess[1] = i;
    locateQueen(chess, 1);
  }

  return cnt;
}
