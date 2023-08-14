function solution(skill, skill_trees) {
  let answer = 0;

  skill_trees = skill_trees.map((v) => {
    return v
      .split('')
      .filter((x) => skill.includes(x))
      .join('');
  });

  skill_trees.forEach((v) => {
    if (skill.includes(v) && skill.indexOf(v) == 0) answer++;
  });
  return answer;
}
