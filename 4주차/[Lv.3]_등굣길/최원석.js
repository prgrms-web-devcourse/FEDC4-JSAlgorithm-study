function solution(m, n, puddles) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  puddles.forEach(([col, row]) => {
    dp[row - 1][col - 1] = null;
  });

  for (let i = 0; i < m; i++) {
    if (dp[0][i] === null) {
      break;
    }

    dp[0][i] = 1;
  }

  for (let i = 0; i < n; i++) {
    if (dp[i][0] === null) {
      break;
    }

    dp[i][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (dp[i][j] === null) {
        continue;
      }

      if (dp[i - 1][j] === null || dp[i][j - 1] === null) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }

  return dp[n - 1][m - 1];
}
