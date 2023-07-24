function solution(bridge_length, weight, truck_weights) {
  const truck_on_bridge_obj = new Map();
  truck_weights.reverse();
  let bridge_weight = 0;
  let answer = 0;

  while (truck_weights.length !== 0 || bridge_weight !== 0) {
    answer++;
    for (const [key, value] of truck_on_bridge_obj.entries()) {
      if (value === 0) {
        const [truck, hashkey] = key.split('&');
        bridge_weight -= truck;
        truck_on_bridge_obj.delete(key);
      } else {
        truck_on_bridge_obj.set(key, value - 1);
      }
    }

    if (bridge_weight + truck_weights.at(-1) <= weight) {
      const truck = truck_weights.pop();
      bridge_weight += truck;
      truck_on_bridge_obj.set(truck + `&${truck_weights.length}`, bridge_length - 1);
    }
  }

  return answer;
}
