function solution(s) {
  var answer = [];
  s.slice(2, s.length - 2)
    .split('},{')
    .sort((a, b) => a.length - b.length)
    .map((x) => x.split(','))
    .map((x) => {
      for (let i = 0; i < x.length; i++) {
        if (answer.includes(+x[i])) continue;
        answer.push(+x[i]);
      }
    });
  return answer;
}
