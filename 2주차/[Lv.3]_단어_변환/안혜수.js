function solution(begin, target, words) {
  let min = Infinity;
  let visit = Array(words.length).fill(false);

  function dfs(test, i, depth) {
    visit[i] = true;
    let change_check = 0;

    //단어가 하나만 다른지 체크
    for (let j = 0; j < test.length; j++) {
      if (test[j] !== words[i][j]) {
        change_check++;
      }
      if (change_check > 1) {
        //하나만 다른게 아니라면 종료
        visit[i] = false;
        return min;
      }
    }
    // 단어가 일치할 때
    if (words[i] === target) {
      visit[i] = false;
      min = Math.min(min, depth);
      return min;
    }
    //단어가 하나만 다르다면 이제 깊이를 깊게 하기
    for (let j = 0; j < visit.length; j++) {
      if (!visit[j]) {
        dfs(words[i], j, depth + 1);
      }
    }
    return min;
  }
  for (let i = 0; i < words.length; i++) {
    dfs(begin, i, 1);
  }
  return isFinite(min) ? min : 0;
}
