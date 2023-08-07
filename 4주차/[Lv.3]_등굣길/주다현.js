//런타임 에러가 나는 코드랍니다... 아직 해결하지 못했어요ㅠㅠㅠㅠ

function solution(m, n, puddles) {
  const arr = Array.from(Array(n), () => Array(m).fill(1));
  puddles.forEach((v) => {
    const [x, y] = v;
    arr[x - 1][y - 1] = 0;
  });
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (arr[i][j] !== 0) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }
  return arr[n - 1][m - 1] % 1000000007;
}
