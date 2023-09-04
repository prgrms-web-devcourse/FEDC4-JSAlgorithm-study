function solution(n, t, m, p) {
  let data = '';
  let result = '';
  let i = 0;
  let j = 1;

  while (data.length < t * m) {
    data += i.toString(n);
    i++;
  }

  for (const ele of data) {
    if (j > m) {
      j = 1;
    }

    if (j === p) {
      result += ele.toUpperCase();
    }

    j++;

    if (result.length === t) {
      break;
    }
  }

  return result;
}
