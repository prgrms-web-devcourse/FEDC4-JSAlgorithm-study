function solution(people, limit) {
  let answer = 0;
  let sp = people.sort((a, b) => a - b);

  while (sp.length > 0) {
    if (sp[0] + sp[sp.length - 1] <= limit) {
      sp.shift();
      sp.pop();
      answer++;
    } else {
      sp.pop();
      answer++;
    }
  }
  return answer;
}
