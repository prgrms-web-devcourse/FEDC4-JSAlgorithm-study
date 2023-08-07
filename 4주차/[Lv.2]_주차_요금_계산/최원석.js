function solution(fees, records) {
  const result = {};
  const answer = [];

  function cal(totalTime) {
    const [baseTime, basePay, perTime, perPay] = fees;

    return basePay + (totalTime < baseTime ? 0 : Math.ceil((totalTime - baseTime) / perTime) * perPay);
  }

  for (const record of records) {
    const [time, carNum, status] = record.split(' ');
    const [hours, minutes] = time.split(':');
    const onlyMinutes = status === 'OUT' ? hours * 60 + +minutes : -(hours * 60 + +minutes);

    result[carNum] = [...(result[carNum] || []), onlyMinutes];
  }

  for (const carNum of Object.keys(result).sort((a, b) => a - b)) {
    if (result[carNum].length % 2) {
      result[carNum] = [...result[carNum], 1439];
    }

    answer.push(cal(result[carNum].reduce((acc, cur) => acc + cur, 0)));
  }

  return answer;
}
