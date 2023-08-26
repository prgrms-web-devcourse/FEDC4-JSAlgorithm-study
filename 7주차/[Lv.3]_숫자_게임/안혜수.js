function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  if (A[A.length - 1] >= B[0]) return answer;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= B[answer]) continue;
    else {
      answer++;
    }
  }
  return answer;
}
