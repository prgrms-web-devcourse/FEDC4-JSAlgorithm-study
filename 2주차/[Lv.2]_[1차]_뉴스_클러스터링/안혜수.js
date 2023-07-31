function solution(str1, str2) {
  let intersection = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = [...str1].map((x, i) => (x = x + str1[i + 1])).filter((x) => x.length === 2 && !/[^a-z]/g.test(x));
  str2 = [...str2].map((x, i) => (x = x + str2[i + 1])).filter((x) => x.length === 2 && !/[^a-z]/g.test(x));

  if (str1.length === 0 && str2.length === 0) return 65536;

  str1.map((x, i) => {
    if (str2.includes(x)) {
      intersection.push(x);
      str2[str2.indexOf(x)] = '';
      str1[i] = '';
    }
  });
  str1 = str1.filter((x) => x != '');
  str2 = str2.filter((x) => x != '');
  return Math.floor((intersection.length / (intersection.length + str1.length + str2.length)) * 65536);
}
