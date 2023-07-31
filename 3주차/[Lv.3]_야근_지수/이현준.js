function solution(n, works) {
  if (works.reduce((acc, work) => (acc += work), 0) < n) return 0;
  works.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    let j = 0;
    while (works[j] <= works[j + 1]) {
      j++;
    }
    works[j] -= 1;
  }

  return works.reduce((acc, work) => (acc += work ** 2), 0);
}
