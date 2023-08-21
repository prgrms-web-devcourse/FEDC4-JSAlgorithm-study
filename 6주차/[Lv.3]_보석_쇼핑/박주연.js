function solution(gems) {
  const tNum = new Set(gems).size;

  const answer = [1, gems.length];
  const gemMap = new Map();

  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);

    if (gemMap.size === tNum) {
      const section = [gemMap.values().next().value + 1, i + 1];
      answer = answer[1] - answer[0] > section[1] - section[0] ? section : answer;
    }
  });
  return answer;
}
