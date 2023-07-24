const makeStr = (str) => {
  const arr = [];
  const regExp = /[^a-z]/;

  for (let i = 0; i < str.length - 1; i++) {
    const tmp1 = str[i].toLowerCase();
    const tmp2 = str[i + 1].toLowerCase();
    if (regExp.test(tmp1) || regExp.test(tmp2)) continue;
    else {
      arr.push(tmp1 + tmp2);
    }
  }
  return arr;
};

function solution(str1, str2) {
  let a1 = makeStr(str1);
  let a2 = makeStr(str2);
  let common = 0;

  a1.map((item) => {
    if (a2.includes(item)) {
      common++;
      a2.splice(a2.indexOf(item), 1);
    }
  });

  const total = a1.length + a2.length;

  return total === 0 ? 65536 : parseInt((common / total) * 65536);
}
