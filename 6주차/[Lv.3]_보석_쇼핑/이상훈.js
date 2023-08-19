function solution(gems) {
  let start = 0;
  let end = gems.length - 1;
  const gemMap = new Map();
  const totalKind = new Set(gems).size;

  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);

    if (gemMap.size === totalKind) {
      const newStart = gemMap.values().next().value;
      const newEnd = i;
      if (newEnd - newStart < end - start) {
        start = newStart;
        end = newEnd;
      }
    }
  });

  return [start + 1, end + 1];
}
