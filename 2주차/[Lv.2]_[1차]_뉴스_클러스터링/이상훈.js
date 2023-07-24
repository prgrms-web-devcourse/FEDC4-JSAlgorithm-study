const makeArr = (str) =>
  str
    .split('')
    .filter((_, idx) => idx !== 0)
    .map((_, idx) => (str[idx] + str[idx + 1]).toUpperCase())
    .filter((item) => /[^A-Za-z]/.test(item) === false);

const makeSet = (str) => makeArr(str).reduce((result, item) => ({ ...result, [item]: result[item] + 1 || 1 }), {});

const makeIntersection = (set1, set2) =>
  Object.keys(set1)
    .filter((key) => set2[key])
    .reduce((result, key) => ({ ...result, [key]: Math.min(set1[key], set2[key]) }), {});

const makeUnion = (set1, set2) => {
  const union = [...new Set([...Object.keys(set1), ...Object.keys(set2)])];
  return union.reduce((result, key) => ({ ...result, [key]: Math.max(set1[key] || 0, set2[key] || 0) }), {});
};

const getLength = (set) => Object.values(set).reduce((acc, value) => acc + value, 0);

function solution(str1, str2) {
  const set1 = makeSet(str1);
  const set2 = makeSet(str2);

  const intersections = makeIntersection(set1, set2);
  const unions = makeUnion(set1, set2);
  const result = Math.floor((getLength(intersections) / getLength(unions)) * 65536);

  return isNaN(result) ? 65536 : result;
}
