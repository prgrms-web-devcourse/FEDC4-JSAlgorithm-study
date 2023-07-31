function solution(n, works) {
  if (works.reduce((acc, work) => acc + work, 0) < n) {
    return 0;
  }

  works.sort((a, b) => b - a);

  while (n) {
    let i = 0;

    works[i]--;

    while (works[i] <= works[i + 1]) {
      i++;
    }

    [works[0], works[i]] = [works[i], works[0]];
    n--;
  }

  return works.reduce((acc, work) => acc + work ** 2, 0);
}
