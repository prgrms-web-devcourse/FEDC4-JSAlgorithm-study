function solution(A, B) {
  let answer = 0;
  let max;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  A.forEach((v, i) => {
    max = B[B.length - 1];
    if (v < max) {
      answer++;
      B.pop();
    }
  });

  return answer;
}
