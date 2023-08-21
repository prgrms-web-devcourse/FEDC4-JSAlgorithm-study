function solution(numbers) {
  const answer = [];

  // 짝수는 무조건 다음 숫자가 f(x) 조건 만족
  for (i of numbers) {
    if (i % 2 === 0) {
      answer.push(i + 1);
    } else {
      // 홀수일 경우
      const newNum = '0' + i.toString(2);
      const idx = newNum.lastIndexOf('0');
      answer.push(parseInt(newNum.substring(0, idx) + '10' + newNum.substring(idx + 2), 2));
    }
  }
  return answer;
}
