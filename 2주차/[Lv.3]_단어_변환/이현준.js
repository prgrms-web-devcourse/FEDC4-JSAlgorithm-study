function compareFn(word1, word2) {
  let differentCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      differentCount++;
      if (differentCount > 1) {
        return false;
      }
    }
  }
  return true;
}

function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  words = words.map((word) => ({ word, visited: false }));

  function bfs(begin, words) {
    const queue = [{ word: begin, steps: 0 }];

    while (queue.length) {
      const { word, steps } = queue.shift();

      if (word === target) {
        return steps;
      }

      for (const nextWordObj of words) {
        const { word: nextWord, visited } = nextWordObj;
        if (!visited && compareFn(word, nextWord)) {
          nextWordObj.visited = true;
          queue.push({ word: nextWord, steps: steps + 1 });
        }
      }
    }
  }

  return bfs(begin, words);
}
