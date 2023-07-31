function solution(toppings) {
  let answer = 0;
  const counter = {};
  const big = new Set();
  const lit = new Set();

  toppings.forEach((topping) => {
    big.add(topping);
    counter[topping] = (counter[topping] || 0) + 1;
  });

  toppings.forEach((topping) => {
    counter[topping]--;

    if (!counter[topping]) {
      big.delete(topping);
    }

    lit.add(topping);

    if (lit.size === big.size) {
      answer++;
    }
  });

  return answer;
}
