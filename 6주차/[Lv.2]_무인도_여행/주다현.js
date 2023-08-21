function solution(maps) {
  const newMap = maps.map((n) => n.split(''));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y, num) {
    let sum = Number(num);

    // 상 하 좌 우 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < newMap.length && ny < newMap[0].length) {
        if (newMap[nx][ny] !== 'X') {
          const next = newMap[nx][ny];
          newMap[nx][ny] = 'X';

          sum += dfs(nx, ny, next);
        }
      }
    }
    return sum;
  }

  const answer = [];

  for (let i = 0; i < newMap.length; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      if (newMap[i][j] !== 'X') {
        const start = newMap[i][j];
        newMap[i][j] = 'X';
        answer.push(dfs(i, j, start));
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
