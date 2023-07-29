function solution(x, y, n) {
  if (x === y) {
    return 0;
  }

  const dp = {};
  let datas = [x];
  dp[x] = 0;

  while (datas.length) {
    const nextDatas = [];

    for (const data of datas) {
      for (const nextData of [data + n, data * 2, data * 3]) {
        if (dp[nextData] || nextData > y) {
          continue;
        }

        if (nextData === y) {
          return dp[data] + 1;
        }

        dp[nextData] = dp[data] + 1;
        nextDatas.push(nextData);
      }
    }

    datas = nextDatas;
  }

  return -1;
}
