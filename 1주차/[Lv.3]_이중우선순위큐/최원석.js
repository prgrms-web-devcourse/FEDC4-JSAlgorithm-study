function solution(operations) {
  const queue = new Set();

  for (const operation of operations) {
    const [cmd, str] = operation.split(' ');

    if (cmd === 'I') {
      queue.add(+str);
    }

    if (cmd === 'D') {
      if (str === '1') {
        queue.delete(Math.max(...queue));
      } else {
        queue.delete(Math.min(...queue));
      }
    }
  }

  return queue.size ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}
