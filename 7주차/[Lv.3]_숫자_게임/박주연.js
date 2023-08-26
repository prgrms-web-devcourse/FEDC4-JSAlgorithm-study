function solution(A, B) {
  let result = 0;
  let idx = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  B.map((v) => {
    if (v > A[idx]) {
      result += 1;
      idx += 1;
    }
  });

  return result;
}
