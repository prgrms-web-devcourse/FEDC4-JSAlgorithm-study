function solution(maps) {
  const answer = [];
  maps = maps.map((map) => [...map]);
  const rowMax = maps.length;
  const colMax = maps[0].length;
  const rowIdxs = [0, 1, 0, -1];
  const colIdxs = [1, 0, -1, 0];
  let total = 0;
  let sum = 0;

  function findArea([row, col]) {
    if (maps[row][col] === 'X') {
      if (sum) {
        total += sum;
        sum = 0;
      }

      return;
    }

    sum += +maps[row][col];
    maps[row][col] = 'X';

    for (let i = 0; i < 4; i++) {
      const newRow = row + rowIdxs[i];
      const newCol = col + colIdxs[i];

      if (newRow !== rowMax && newCol !== colMax && newRow >= 0 && newCol >= 0) {
        findArea([newRow, newCol]);
      }
    }
  }

  for (let i = 0; i < rowMax; i++) {
    for (let j = 0; j < colMax; j++) {
      findArea([i, j], 0);

      if (total) {
        answer.push(total);
      }

      total = 0;
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
