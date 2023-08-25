function solution(A, B) {
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => b - a);

  let ptr = 0;
  return A.reduce((acc, a) => {
    const b = B[ptr];

    if (a < b) {
      ptr++;
      acc++;
    }

    return acc;
  }, 0);
}
