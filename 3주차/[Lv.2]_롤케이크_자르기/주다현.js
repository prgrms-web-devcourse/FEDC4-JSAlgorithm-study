/*

시간초과 코드 : 

function solution(topping) {
  let answer = 0,
    olderBrother = [],
    youngerBrother = [];

  for (let i = 0; i < topping.length - 1; i++) {
    olderBrother = topping.slice(0, i + 1);
    youngerBrother = topping.slice(i + 1, topping.length);

    if ([...new Set(olderBrother)].length == [...new Set(youngerBrother)].length) answer++;
  }

  return answer;
}

*/

function solution(topping) {
  let answer = 0;
  let OB = new Map();
  let YB = new Map();

  topping.forEach((v) => {
    OB.has(v) ? OB.set(v, OB.get(v) + 1) : OB.set(v, 1);
  });

  topping.forEach((v) => {
    YB.has(v) ? YB.set(v, YB.get(v) + 1) : YB.set(v, 1);
    OB.get(v) !== 1 ? OB.set(v, OB.get(v) - 1) : OB.delete(v);

    if (YB.size === OB.size) answer++;
  });

  return answer;
}
