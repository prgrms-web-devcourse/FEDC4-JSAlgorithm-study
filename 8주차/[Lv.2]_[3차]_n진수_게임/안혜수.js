function solution(n, t, m, p) {
  let [number, str, answer] = [0, '', ''];

  while (str.length < t * m) {
    str += number.toString(n);
    number++;
  }

  for (let i = 0; i < t; i++) {
    answer += str[i * m + (p - 1)].toUpperCase();
  }
  return answer;
}
