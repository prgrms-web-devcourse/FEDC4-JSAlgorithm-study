function solution(s) {
  let answer = [];
  let arr = [];

  s = s.slice(2, -2);

  s.split('},{').forEach((v) => {
    arr.push(v.split(',').map((v) => Number(v)));
  });
  arr.sort((a, b) => a.length - b.length);

  arr.forEach((v) => {
    v.forEach((x) => {
      if (!answer.includes(x)) answer.push(x);
    });
  });

  return answer;
}
