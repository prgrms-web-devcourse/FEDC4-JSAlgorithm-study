function solution(maps) {
  const [m, n] = [maps[0].length, maps.length];
  let queue = [[0, 0]];

  while (queue.length) {
    const [i, j] = queue.shift();
    if (i - 1 >= 0 && maps[i - 1][j] === 1) { maps[i - 1][j] += maps[i][j]; queue.push([i - 1, j]) }
    if (j - 1 >= 0 && maps[i][j - 1] === 1) { maps[i][j - 1] += maps[i][j]; queue.push([i, j - 1]) }
    if (j + 1 < m && maps[i][j + 1] === 1) { maps[i][j + 1] += maps[i][j]; queue.push([i, j + 1]) }
    if (i + 1 < n && maps[i + 1][j] === 1) { maps[i + 1][j] += maps[i][j]; queue.push([i + 1, j]) }
  }
  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}