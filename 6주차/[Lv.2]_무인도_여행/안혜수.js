function solution(maps) {
  const answer = [];
  let food = [];
  maps = maps.map((x) => x.split(''));
  function dfs(n, m, depth) {
    food.push(maps[n][m]);
    maps[n][m] = 'X';
    if (m + 1 < maps[0].length && maps[n][m + 1] !== 'X') dfs(n, m + 1, depth + 1);
    if (m - 1 >= 0 && maps[n][m - 1] !== 'X') dfs(n, m - 1, depth + 1);
    if (n + 1 < maps.length && maps[n + 1][m] !== 'X') dfs(n + 1, m, depth + 1);
    if (n - 1 >= 0 && maps[n - 1][m] !== 'X') dfs(n - 1, m, depth + 1);

    if (!depth) answer.push(food);
  }
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== 'X') {
        food = [];
        dfs(i, j, 0);
      }
    }
  }
  if (!answer.length) return [-1];
  return answer.map((x) => x.reduce((acc, cur) => acc + Number(cur), 0)).sort((a, b) => a - b);
}
