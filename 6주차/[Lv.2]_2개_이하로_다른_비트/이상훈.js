function solution(numbers) {
  return numbers.map((n) => f(n));
}

function f(x) {
  switch (x % 2) {
    case 0:
      return x + 1;
    case 1:
      const str = x.toString(2);
      for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '0') {
          const result = str.slice(0, i) + '10' + str.slice(i + 2, str.length);
          return parseInt(result, 2);
        }
      }

      const result = '10' + str.slice(1, str.length);
      return parseInt(result, 2);
  }
}
