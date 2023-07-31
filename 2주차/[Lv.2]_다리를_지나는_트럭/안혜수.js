function solution(bridge_length, weight, truck_weights) {
  let time = 1;
  let queue = [];

  do {
    if (queue.length > 0 && queue[0][1] === time) queue.shift();

    if (queue.length < bridge_length && queue.reduce((acc, cur) => acc + cur[0], 0) + truck_weights[0] <= weight) {
      queue.push([truck_weights.shift(), time + bridge_length]);
      time++;
    } else {
      const [w, t] = queue.shift();
      time = t;
    }
  } while (queue.length || truck_weights.length);
  return time;
}
