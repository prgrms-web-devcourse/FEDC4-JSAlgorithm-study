const insert = (map, key) => {
  const value = map.has(key) ? map.get(key) + 1 : 1;
  map.set(key, value);
};

const remove = (map, key) => {
  const value = map.get(key);
  if (value > 1) map.set(key, value - 1);
  else map.delete(key);
};

function solution(topping) {
  const personA = new Map();
  const personB = new Map();

  topping.forEach((t) => insert(personA, t));

  return topping.reduce((answer, t) => {
    remove(personA, t);
    insert(personB, t);

    return personA.size === personB.size ? answer + 1 : answer;
  }, 0);
}
