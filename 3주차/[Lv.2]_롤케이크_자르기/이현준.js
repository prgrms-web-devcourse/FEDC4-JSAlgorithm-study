function setTopping(topping, map) {
  if (map.has(topping)) {
    map.set(topping, map.get(topping) + 1);
  } else {
    map.set(topping, 1);
  }
}

function solution(topping) {
  const cheolsu = new Map();
  const brother = new Map();

  topping.forEach((tp) => {
    setTopping(tp, brother);
  });

  return topping.reduce((acc, tp) => {
    setTopping(tp, cheolsu);

    brother.set(tp, brother.get(tp) - 1);
    if (brother.get(tp) === 0) {
      brother.delete(tp);
    }

    return brother.size === cheolsu.size ? (acc += 1) : acc;
  }, 0);
}
