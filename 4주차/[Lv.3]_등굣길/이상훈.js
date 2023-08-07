function solution(m, n, puddles) {
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }).fill(0));

  puddles.forEach(([x, y]) => {
    dp[y][x] = -1;
  });

  for (let i = 1; i <= m; i++) {
    if (dp[1][i] === -1) break;
    dp[1][i] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (dp[i][1] === -1) break;
    dp[i][1] = 1;
  }

  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      if (dp[j][i] === -1) continue;

      if (dp[j - 1][i] === -1 || dp[j][i - 1] === -1) {
        dp[j][i] = Math.max(dp[j - 1][i], dp[j][i - 1]);
      } else {
        dp[j][i] = (dp[j - 1][i] + dp[j][i - 1]) % 1000000007;
      }
    }
  }

  return dp[n][m];
}
