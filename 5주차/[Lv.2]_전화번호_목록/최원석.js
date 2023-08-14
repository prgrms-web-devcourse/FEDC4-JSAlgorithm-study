function solution(nums) {
  const storedNums = {};

  for (const num of nums) {
    storedNums[num] = true;
  }

  for (const num of nums) {
    for (let i = 1; i < num.length; i++) {
      const newNum = num.slice(0, i);

      if (storedNums[newNum]) {
        return false;
      }
    }
  }

  return true;
}
