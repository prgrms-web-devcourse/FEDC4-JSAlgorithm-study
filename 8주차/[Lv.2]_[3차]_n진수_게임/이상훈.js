// 1. 모든 플레이어가 말하게 될 숫자를 나타내는 문자열을 구한다. (문자열의 길이: t * m)
// 2. 모든 문자열 중에서 튜브가 이야기해야 할 t개의 문자만 필터링해서 반환한다.
function solution(n, t, m, p) {
  return makeTotalString(n, t, m)
    .split('')
    .filter((_, i) => i % m === p - 1)
    .slice(0, t)
    .join('');
}

function makeTotalString(n, t, m) {
  let result = '';

  let i = 0;
  while (result.length <= t * m) {
    result += i.toString(n);
    i++;
  }

  return result.toUpperCase();
}
