function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur, 0) < n) return 0;
  works.sort((a, b) => b - a);

  while (n > 0) {
    let i = 0;
    works[i] -= 1;
    while (works[i] <= works[i + 1]) {
      i++;
    }
    const tmp = works[i];
    works[i] = works[0];
    works[0] = tmp;

    n -= 1;
  }
  return works.reduce((acc, cur) => acc + cur * cur, 0);
}
