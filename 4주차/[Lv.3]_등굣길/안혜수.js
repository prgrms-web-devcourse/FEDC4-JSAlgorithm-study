function solution(m, n, puddles) {
  var answer = 0;
  let route = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (const pool of puddles) {
    if (pool.length) route[pool[1]][pool[0]] = -1;
  }
  route[1][1] = 1;
  for (let i = 1; i < route.length; i++) {
    for (let j = 1; j < route[0].length; j++) {
      if (i === 1 && j === 1) continue;
      if (route[i][j] !== -1) {
        if (route[i - 1][j] > 0) route[i][j] += route[i - 1][j];
        if (route[i][j - 1] > 0) route[i][j] += route[i][j - 1];
        route[i][j] %= 1000000007
      }
    }
  }
  return route[n][m];
}