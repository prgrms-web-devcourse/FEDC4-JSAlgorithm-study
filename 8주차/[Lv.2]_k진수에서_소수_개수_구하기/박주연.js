function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function solution(n, k) {
  let answer = 0;
  let num = n.toString(k);

  const arr = num.split('0');

  for (let i of arr) {
    if (isPrime(Number(i))) answer++;
  }

  return answer;
}
