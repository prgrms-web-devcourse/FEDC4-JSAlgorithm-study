function solution(n, t, m, p) {
  let result = '';

  let tmp = '';
  for (let i = 0; i < t * m; i++) {
    tmp += i.toString(n).toUpperCase();
  }

  let cnt = 0;
  for (let i = 0; i < tmp.length; i++) {
    if (cnt === t) break;
    if (i % m === p - 1) {
      result += tmp[i];
      cnt++;
    }
  }

  return result;
}
