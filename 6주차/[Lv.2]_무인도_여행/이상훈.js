function solution(maps) {
  const answer = [];
  const visited = Array.from({ length: maps.length }, () => Array.from({ length: maps[0].length }, () => 0));

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (ableToGo(i, j)) {
        visited[i][j] = 1;
        answer.push(dfs(i, j));
      }
    }
  }

  answer.sort((a, b) => a - b);
  if (answer.length === 0) answer.push(-1);
  return answer;

  function isInBoundary(y, x) {
    if (y < 0 || y >= maps.length) return false;
    if (x < 0 || x >= maps[0].length) return false;
    return true;
  }

  function ableToGo(y, x) {
    return isInBoundary(y, x) && !visited[y][x] && maps[y][x] !== 'X';
  }

  function dfs(y, x) {
    let foodCount = Number(maps[y][x]);

    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (const dir of dirs) {
      const nextY = y + dir[0];
      const nextX = x + dir[1];

      if (ableToGo(nextY, nextX)) {
        visited[nextY][nextX] = 1;
        foodCount += dfs(nextY, nextX);
      }
    }

    return foodCount;
  }
}
