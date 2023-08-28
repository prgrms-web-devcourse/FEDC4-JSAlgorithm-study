function solution(relation) {
  const answer = [];

  function isMin(unique, dec_now) {
    for (let i = 0; i < unique.length; i++) {
      if ((unique[i] & dec_now) === unique[i]) return false;
    }
    return true;
  }
  for (let i = 1; i < 1 << relation[0].length; i++) {
    const now = i.toString(2).padStart(relation[0].length, 0);
    const key = new Set();

    if (!isMin(answer, parseInt(now, 2))) continue;

    relation.map((x) => {
      let temp_key = '';
      for (let i = 0; i < relation[0].length; i++) {
        if (now[i] === '1') {
          temp_key += x[i];
        }
      }
      key.add(temp_key);
    });
    if (key.size === relation.length) answer.push(parseInt(now, 2));
  }
  return answer.length;
}
