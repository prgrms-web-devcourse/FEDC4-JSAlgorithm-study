function solution(gems) {
  let min = [1, gems.length];
  const kinds = new Set(gems);
  const temp_kinds = new Map();

  let left = 0,
    right = 0;
  temp_kinds.set(gems[0], 1);

  while (right < gems.length) {
    if (temp_kinds.size === kinds.size) {
      if (min[1] - min[0] > right - left) min = [left + 1, right + 1];
      const exist = temp_kinds.get(gems[left]);
      temp_kinds.set(gems[left], exist - 1);
      if (!(exist - 1)) temp_kinds.delete(gems[left]);
      left++;
    } else {
      right++;
      const exist = temp_kinds.get(gems[right]);
      temp_kinds.set(gems[right], exist ? exist + 1 : 1);
    }
  }
  return min;
}
