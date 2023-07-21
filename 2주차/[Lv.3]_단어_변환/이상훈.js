const isConvertable = (begin, target) => {
  let count = 0;
  let length = begin.length;

  for (let i = 0; i < length; i++) {
    if (begin[i] !== target[i]) count++;
    if (count === 2) return false;
  }

  return true;
};

function solution(begin, target, words) {
  let answer = Infinity;
  const length = words.length;
  const visited = {};

  const dfs = (nowWord, depth) => {
    for (let i = 0; i < length; i++) {
      if (visited[nowWord]) continue;

      if (nowWord === target) {
        answer = Math.min(answer, depth);
        return;
      }

      const nextWord = words[i];
      if (isConvertable(nowWord, nextWord)) {
        visited[nowWord] = 1;
        dfs(nextWord, depth + 1);
        visited[nowWord] = 0;
      }
    }
  };

  dfs(begin, 0);
  return answer === Infinity ? 0 : answer;
}
