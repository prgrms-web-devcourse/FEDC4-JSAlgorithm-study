function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let checkIdx = 0;

  return B.reduce((acc, cur) => {
    if (cur > A[checkIdx]) {
      checkIdx++;

      return acc + 1;
    }

    return acc;
  }, 0);
}
