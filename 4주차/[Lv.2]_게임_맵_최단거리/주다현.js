function solution(maps) {
  const xLen = maps[0].length,
    yLen = maps.length;
  const destination = [xLen - 1, yLen - 1];

  const directionX = [-1, 1, 0, 0],
    directionY = [0, 0, 1, -1];

  let queue = [];
  queue.push([0, 0, 1]);

  while (queue.length !== 0) {
    const [currentY, currentX, movingNum] = queue.shift();

    if (currentY == destination[1] && currentX == destination[0]) return movingNum;

    for (let i = 0; i < 4; i++) {
      const x = currentX + directionX[i];
      const y = currentY + directionY[i];
      if (x >= 0 && x < xLen && y >= 0 && y < yLen && maps[y][x] == 1) {
        queue.push([y, x, movingNum + 1]);
        maps[y][x] = 0;
      }
    }
  }
  return -1;
}
