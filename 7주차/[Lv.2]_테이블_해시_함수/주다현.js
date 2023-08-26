//과거의 내가 풀었던 방법 -> 과거의 내가 더 나은 느낌
function solution(data, col, row_begin, row_end) {
  let res = 0;
  data.sort((a, b) => {
    //내림차순 정렬
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    //오름차순 정렬
    else return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin; i <= row_end; i++) {
    res ^= data[i - 1].map((v) => v % i).reduce((a, b) => a + b, 0);
  }

  return res;
}

//현재의 내가 푼 방법
function solution(data, col, row_begin, row_end) {
  let result = 0;

  //각 행의 col번째 값이 같다면 첫번째 원소를 기준으로 내림차순 정렬하고 같지 않다면 col번째 값을 기준으로 오름차순 정렬
  data.sort((a, b) => (a[col - 1] - b[col - 1] == 0 ? b[0] - a[0] : a[col - 1] - b[col - 1]));

  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    let line = 0; //여기에 각 행의 나머지 연산 값을 더한 수를 저장 -> 각 행마다 초기화 시켜줘야 함
    for (let j = 0; j < data[0].length; j++) {
      line += data[i][j] % (i + 1);
    }
    result ^= line; //xor연산
  }
  return result;
}
