function solution(skill, skill_trees) {
  return skill_trees.reduce((answer, skill_tree) => {
    let ptr = 0;

    for (const s of skill_tree) {
      const nextPtr = skill.indexOf(s);
      if (nextPtr === -1) continue;
      if (nextPtr > ptr) return answer;
      ptr++;
    }

    return answer + 1;
  }, 0);
}
