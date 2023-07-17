const lowerBound = (arr, target) => {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target > arr[mid]) start = mid + 1;
    else end = mid;
  }

  return start;
};

function solution(operations) {
  const queue = [];

  operations.forEach((operation) => {
    operation = operation.split(' ');
    const opCode = operation[0];
    const value = Number(operation[1]);

    if (opCode === 'I') queue.splice(lowerBound(queue, value), 0, value);
    else if (value === 1) queue.pop();
    else if (value === -1) queue.shift();
  });

  return queue.length > 0 ? [queue[queue.length - 1], queue[0]] : [0, 0];
}
