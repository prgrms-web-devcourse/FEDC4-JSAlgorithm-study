function solution(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let time = 0;
  let onLoad = 0;

  truck_weights.forEach((truck) => {
    time++;
    onLoad -= bridge.shift();

    while (onLoad + truck > weight) {
      const nextIdx = bridge.findIndex((item) => item !== 0);
      const nextTruck = bridge[nextIdx];

      bridge = bridge.slice(nextIdx + 1, bridge.length).concat(Array.from({ length: nextIdx + 1 }, () => 0));

      time += nextIdx + 1;
      onLoad -= nextTruck;
    }

    onLoad += truck;
    bridge.push(truck);
  });

  time += bridge.length;
  return time;
}
