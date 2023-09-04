// 1. 숫자를 k진수로 변환한다.
// 2. 변환된 숫자를 0을 기준으로 나눈다.
// 3. 간혹 0끼리 붙어있는 경우가 있으므로, 이 경우는 필터링한다.
// 4. 변환된 배열을 순회하면서 각 원소가 소수인 경우만 필터링한다.
function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .filter((n) => n !== '')
    .filter((n) => isPrime(Number(n))).length;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
