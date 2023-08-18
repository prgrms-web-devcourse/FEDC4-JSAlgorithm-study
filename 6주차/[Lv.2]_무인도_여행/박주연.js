function solution(maps) {
  const result = [];
  maps = maps.map((v) => v.split(''));
  function dfs(dx, dy) {
    if (dx < 0 || dx >= maps.length || dy < 0 || dy >= maps[0].length) return 0;
    if (maps[dx][dy] === 'X') return 0;
    const mark = parseInt(maps[dx][dy]); // 기준점을 기준으로 상하좌우 탐색. 문자열 숫자로 변환하기 위해 parseInt 필수
    maps[dx][dy] = 'X'; // 방문 처리
    const sum = mark + dfs(dx - 1, dy) + dfs(dx, dy - 1) + dfs(dx + 1, dy) + dfs(dx, dy + 1);
    return sum;
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] !== 'X') result.push(dfs(i, j));
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
