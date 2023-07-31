function solution(operations) {
  var answer = [];
  let queue = new Set();

  operations.forEach((x) => {
    const command = x.split(' ');
    switch (command[0]) {
      case 'I':
        queue.add(+command[1]);
        break;
      case 'D':
        if (command[1] === '1') queue.delete(Math.max(...queue));
        else if (command[1] === '-1') queue.delete(Math.min(...queue));
        break;
    }
  });
  answer.push(Math.max(...queue));
  answer.push(Math.min(...queue));
  return answer.map((x) => (isFinite(x) ? x : 0));
}
