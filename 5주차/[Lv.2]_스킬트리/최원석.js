function solution(skill, skillTrees) {
  const re = new RegExp(`[^${skill}]`, 'g');

  return skillTrees.map((skillTree) => skillTree.replace(re, '')).filter((skillTree) => skill.indexOf(skillTree) === 0)
    .length;
}
