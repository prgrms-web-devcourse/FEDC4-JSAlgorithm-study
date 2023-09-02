function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .map((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return '1';
      }
      return number;
    })
    .filter((x) => x !== '1' && x !== '').length;
}
