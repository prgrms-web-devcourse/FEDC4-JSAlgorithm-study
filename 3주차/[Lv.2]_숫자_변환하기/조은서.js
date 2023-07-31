function solution(x, y, n) {
  let dp = Array.from({ length: y + 1 }, () => Infinity);
  dp[x] = 0;
  for (let i = x; i <= y; i++) {
    if (dp[i] === Infinity) {
      continue;
    }
    if (i * 2 <= y) {
      dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    }

    if (i * 3 <= y) {
      dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }

    if (i + n <= y) {
      dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }
  }

  return dp[y] < Infinity ? dp[y] : -1;
}
