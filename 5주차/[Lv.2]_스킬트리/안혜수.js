function solution(skill, skill_trees) {
  const reg = new RegExp(`[${skill}]`, 'g');
  return skill_trees
    .map((x) => {
      if (x.match(reg)) {
        const result = x.match(reg).join('');
        if (skill.slice(0, result.length) === result) return true;
        return false;
      }
      return true;
    })
    .filter((x) => x).length;
}
