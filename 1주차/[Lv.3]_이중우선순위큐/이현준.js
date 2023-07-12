function solution(operations) {
  const array = [];
  operations.forEach((operation) => {
    const [op, num] = operation.split(' ');
    if (op === 'I') {
      array.push(Number(num));
      array.sort((a, b) => a - b);
    } else {
      num === '1' ? array.pop() : array.shift();
    }
  });
  return array.length > 0 ? [array.at(-1), array[0]] : [0, 0];
}
