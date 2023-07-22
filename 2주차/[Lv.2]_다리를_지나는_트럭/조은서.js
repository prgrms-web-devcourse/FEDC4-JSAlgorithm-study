function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let arr = Array.from({ length: bridge_length }, () => 0);
  let i = 0;

  while (arr.length > 0 && i < truck_weights.length) {
    arr.splice(0, 1);
    const total = arr.reduce((acc, cur) => acc + cur, 0);

    if (total + truck_weights[i] <= weight) {
      arr.push(truck_weights[i]);
      i++;
    } else {
      arr.push(0);
    }
    answer++;
    if (i === truck_weights.length) {
      answer += arr.length;
    }
  }

  return answer;
}
