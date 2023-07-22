function solution(begin, target, words) {
  let answer = Infinity;

  function dfs(begin, words, cnt) {
    if (begin === target) {
      answer = Math.min(answer, cnt);
      return;
    }

    const filteredWords = words.filter(
      (word) => [...word].reduce((acc, cur, idx) => (cur === begin[idx] ? acc + 1 : acc), 0) === begin.length - 1,
    );

    filteredWords.forEach((filteredWord) => {
      dfs(
        filteredWord,
        words.filter((word) => filteredWord !== word),
        cnt + 1,
      );
    });
  }

  dfs(begin, words, 0);

  return isFinite(answer) ? answer : 0;
}
