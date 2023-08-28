function solution(relation) {
  let combinations = [];
  const indexes = Array.from({ length: relation[0].length }, (_, i) => i);

  for (let i = 0; i < relation[0].length; i++) {
    combinations.push(...getCombinations(indexes, i + 1));
  }

  combinations = filterUniqueness(combinations);
  combinations = filterMinimality(combinations);

  return combinations.length;

  function filterUniqueness(combinations) {
    return combinations.filter((combination) => {
      const set = new Set();

      relation.forEach((tuple) => {
        set.add(combination.map((key) => tuple[key]).join(','));
      });

      return set.size === relation.length;
    });
  }

  function filterMinimality(combinations) {
    const result = [];

    while (combinations.length) {
      result.push(combinations[0]);

      combinations = combinations.reduce(
        (acc, combination) => (combinations[0].every((key) => combination.includes(key)) ? acc : [...acc, combination]),
        [],
      );
    }

    return result;
  }
}

function getCombinations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}
