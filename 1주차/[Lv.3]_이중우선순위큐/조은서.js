function solution(operations) {
  var answer = [];
  let arr = [];
  operations.forEach((element) => {
    const [prefix, num] = element.split(' ');
    if (prefix === 'I') {
      arr.push(parseInt(num));
      arr.sort((a, b) => a - b);
    } else {
      if (num === '-1') {
        arr.shift();
      } else {
        arr.pop();
      }
    }
  });
  answer.push(arr[arr.length - 1] || 0, arr[0] || 0);
  return answer;
}
