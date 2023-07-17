function solution(operations) {
  let answer = [],
    Q = [];

  operations.forEach((v, i) => {
    let [order, num] = v.split(' ');
    if (order === 'I') {
      Q.push(Number(num));
    }

    if (order === 'D') {
      if (num === '1') Q.splice(Q.indexOf(Math.max(...Q)), 1);

      if (num == '-1') Q.splice(Q.indexOf(Math.min(...Q)), 1);
    }
  });

  return Q.length === 0 ? [0, 0] : [Math.max(...Q), Math.min(...Q)];
}
