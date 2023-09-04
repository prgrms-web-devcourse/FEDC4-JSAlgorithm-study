function solution(n, t, m, p) {
  let answer = '',
    result = '';

  for (let i = 0; i < t * m; i++) {
    answer += i.toString(n);
  }
  answer = answer.split('');
  for (let i = p - 1; i < t * m; i += m) {
    result += answer[i].toUpperCase();
    if (result.length == t) return result;
  }
}
