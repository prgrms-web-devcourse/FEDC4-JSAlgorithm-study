function solution(bridge_length, weight, truck_weights) {
  const onTheBridge = Array(bridge_length).fill(0);
  let currentWeight = 0;
  let time = 0;
  while (truck_weights.length) {
    time++;
    currentWeight -= onTheBridge.shift();
    if (currentWeight + truck_weights[0] > weight) {
      onTheBridge.push(0);
    } else {
      const currentTruck = truck_weights.shift();
      onTheBridge.push(currentTruck);
      currentWeight += currentTruck;
    }
  }
  return time + bridge_length;
}
