function solution(n, k) {
  let answer = 0;
  const list = n
    .toString(k)
    .split('0')
    .filter((v) => v !== '')
    .map((v) => +v);

  function isPrime(n) {
    if (n === 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < list.length; i++) {
    if (isPrime(list[i])) {
      answer++;
    }
  }

  return answer;
}
