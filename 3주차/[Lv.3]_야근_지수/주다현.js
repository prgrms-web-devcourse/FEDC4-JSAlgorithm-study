function solution(n, works) {
  if (works.reduce((a, b) => a + b, 0) < n) return 0;

  const sortedArr = works.sort((a, b) => b - a);

  while (n) {
    let max = sortedArr[0];
    for (let i = 0; i < works.length; i++) {
      if (sortedArr[i] >= max) {
        sortedArr[i]--;
        n--;
      }
      if (n <= 0) break;
    }
  }

  return sortedArr.map((v) => v ** 2).reduce((a, b) => a + b, 0);
}
