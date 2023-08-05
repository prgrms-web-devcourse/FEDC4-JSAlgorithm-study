function solution(fees, records) {
  let obj = {};

  records.forEach((v, i) => {
    let [time, num, type] = v.split(' ');
    let [hour, minute] = time.split(':');
    time = Number(minute) + hour * 60;
    if (!obj[num]) obj[num] = { num, time: 0 };

    obj[num].type = type;

    if (type === 'OUT') {
      obj[num].time += time - obj[num].lastTime;
      return;
    }
    obj[num].lastTime = time;
  });

  return Object.values(obj)
    .sort((a, b) => a.num - b.num)
    .map((v) => {
      if (v.type === 'IN') v.time += 1439 - v.lastTime;
      if (fees[0] > v.time) return fees[1];
      return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
    });
}
