const getDiffTime = (start, end) => {
  const [startHour, startMinute] = start.split(':').map((e) => Number(e));
  const [endHour, endMinute] = end.split(':').map((e) => Number(e));
  return (endHour - startHour) * 60 + endMinute - startMinute;
};

const addTime = (map, stackItem, endTime) => {
  const [startTime, carId] = stackItem;
  const diffTime = getDiffTime(startTime, endTime);
  const nextValue = map.has(carId) ? map.get(carId) + diffTime : diffTime;
  map.set(carId, nextValue);
};

function solution(fees, records) {
  const stack = [];
  const map = new Map();

  records = records.map((record) => record.split(' ')).sort((a, b) => a[1] - b[1]);

  records.forEach((record) => {
    const [time, _, oper] = record;

    switch (oper) {
      case 'IN':
        if (stack.length > 0) addTime(map, stack.pop(), '23:59');
        stack.push(record);
        break;
      case 'OUT':
        addTime(map, stack.pop(), time);
        break;
    }
  });

  if (stack.length > 0) addTime(map, stack.pop(), '23:59');

  return Array.from(map).reduce((answer, item) => {
    const exceedTime = item[1] - fees[0];
    const result = exceedTime <= 0 ? fees[1] : fees[1] + Math.ceil(exceedTime / fees[2]) * fees[3];
    return [...answer, result];
  }, []);
}
