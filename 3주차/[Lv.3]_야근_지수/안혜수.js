function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur, 0) < n) return 0;
  if (works.length === 1) return (works[0] - n) ** 2;
  works.sort((a, b) => b - a);
  while (n) {
    works[0] -= 1;
    for (let i = 0; i < works.length; i++) {
      if (works[i] < works[i + 1]) {
        let min = works[i];
        works[i] = works[i + 1];
        works[i + 1] = min;
      } else break;
    }
    n--;
  }
  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
