function solution(numbers) {
  var answer = [];
  let c;
  numbers.forEach((v) => {
    if (v < 2 || v % 2 === 0) {
      answer.push(v + 1);
    } else {
      let c = 2;
      while (true) {
        if ((v + 1) % (c * 2) === 0) {
          c = c * 2;
        } else {
          break;
        }
      }
      answer.push(v + c / 2);
    }
  });
  return answer;
}
