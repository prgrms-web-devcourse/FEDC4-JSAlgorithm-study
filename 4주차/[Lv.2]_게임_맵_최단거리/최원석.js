function solution(maps) {
  const yLen = maps.length;
  const xLen = maps[0].length;
  const yGoal = yLen - 1;
  const xGoal = xLen - 1;
  const yMove = [0, 0, -1, 1];
  const xMove = [-1, 1, 0, 0];

  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length) {
    const [curY, curX, curLen] = queue.shift();

    if (curY === yGoal && curX === xGoal) {
      return curLen;
    }

    for (let i = 0; i < 4; i++) {
      const nextY = curY + yMove[i];
      const nextX = curX + xMove[i];

      if (0 <= nextY && nextY < yLen && 0 <= nextX && nextX < xLen && maps[nextY][nextX] === 1) {
        queue.push([nextY, nextX, curLen + 1]);
        maps[nextY][nextX] = 0;
      }
    }
  }

  return -1;
}
