function solution(gems) {
  const set = new Set(gems);
  const gemMap = new Map();
  let [startIdx, endIdx] = [0, gems.length - 1];

  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);

    if (gemMap.size === set.size) {
      const curStartIdx = gemMap.values().next().value;
      const curEndIdx = gemMap.get(gem);

      if (curEndIdx - curStartIdx < endIdx - startIdx) {
        [startIdx, endIdx] = [curStartIdx, curEndIdx];
      }
    }
  });

  return [startIdx + 1, endIdx + 1];
}
