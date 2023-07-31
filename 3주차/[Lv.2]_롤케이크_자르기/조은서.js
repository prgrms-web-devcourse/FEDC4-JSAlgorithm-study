function solution(topping) {
  let answer = 0;
  let map = new Map();
  let mapb = new Map();

  const mapHelperAdd = (map, val) => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  };

  const mapHelperRemove = (map, val) => {
    if (map.has(val) && map.get(val) > 1) {
      map.set(val, map.get(val) - 1);
    } else {
      map.delete(val);
    }
  };

  topping.forEach((t) => {
    mapHelperAdd(map, t);
  });

  while (topping.length > 0) {
    const tmp = topping.pop();
    mapHelperAdd(mapb, tmp);
    mapHelperRemove(map, tmp);
    if (map.size === mapb.size) answer++;
  }
  return answer;
}
