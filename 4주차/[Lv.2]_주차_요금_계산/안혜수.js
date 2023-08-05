function solution(fees, records) {
  let cars = new Map();
  var answer = [];

  for (const record of records) {
    let [time, number, INOUT] = record.split(" ");
    time = time.split(":").reduce((acc, cur, i) => i ? acc + (+cur) : acc + cur * 60, 0);
    let car = cars.get(number);
    if (car === undefined) {
      cars.set(number, 0);
      car = 0;
    }
    if (INOUT === 'IN') {
      cars.set(number, car + 1439 - time)
    }
    else if (INOUT === 'OUT') {
      cars.set(number, car - (1439 - time));
    }
  }
  for (const [key, value] of cars.entries()) {
    answer.push([key, value])
  }
  return answer.sort().map(x => x[1] > fees[0] ? fees[1] + Math.ceil((x[1] - fees[0]) / fees[2]) * fees[3] : fees[1]);
}