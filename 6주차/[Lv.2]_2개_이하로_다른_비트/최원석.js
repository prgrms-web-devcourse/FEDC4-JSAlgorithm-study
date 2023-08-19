function solution(numbers) {
  const answer = [];

  for (const number of numbers) {
    const bit = [...number.toString(2)];

    if (!+bit.at(-1)) {
      answer.push(number + 1);
      continue;
    }

    if (!bit.includes('0')) {
      bit.unshift('0');
    }

    for (let i = bit.length - 1; i >= 0; i--) {
      if (!+bit[i - 1] && +bit[i]) {
        [bit[i - 1], bit[i]] = [bit[i], bit[i - 1]];
        answer.push(parseInt(bit.join(''), 2));
        break;
      }
    }
  }

  return answer;
}
