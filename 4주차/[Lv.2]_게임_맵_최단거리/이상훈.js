const isInBoundary = (maps, y, x) => {
  if (y < 0 || y >= maps.length) return false;
  if (x < 0 || x >= maps[0].length) return false;
  if (!maps[y][x]) return false;

  return true;
};

function solution(maps) {
  const queue = [];
  const visited = Array.from({ length: maps.length }, () => Array.from({ length: maps[0].length }).fill(0));
  const [targetY, targetX] = [maps.length - 1, maps[0].length - 1];

  queue.push([0, 0, 1]);
  visited[0][0] = 1;

  while (queue.length > 0) {
    const [nowY, nowX, depth] = queue.shift();
    if (nowY === targetY && nowX === targetX) return depth;

    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    dirs.forEach(([dirY, dirX]) => {
      const nextX = nowX + dirX;
      const nextY = nowY + dirY;

      if (isInBoundary(maps, nextY, nextX) && !visited[nextY][nextX]) {
        queue.push([nextY, nextX, depth + 1]);
        visited[nextY][nextX] = 1;
      }
    });
  }

  return -1;
}
