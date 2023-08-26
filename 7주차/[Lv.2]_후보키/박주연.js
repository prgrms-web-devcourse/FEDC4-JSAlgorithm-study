// 너무 어렵네요..구글링의 도움을 결국 받았습니다

// 조합 만드는 함수
function getCombination(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((v) => [fixed, ...v]);
    result.push(...attached);
  });

  return result;
}

// 유일성 체크 함수
function checkUnique(column, relation) {
  const set = new Set();

  relation.forEach((v) => {
    let string = '';
    column.forEach((x) => {
      string += v[x];
    });
    set.add(string);
  });

  return set.size === relation.length;
}

// 최소성 체크 함수
function checkMinimality(column, minimality) {
  let isMinimal = true;
  minimality.forEach((i) => {
    let cnt = 0;
    i.forEach((j) => {
      if (column.indexOf(j) !== -1) cnt++;
    });
    if (cnt === i.length) isMinimal = false;
  });

  return isMinimal;
}

function solution(relation) {
  let answer = 0;
  const combination = [];
  const arr = new Array(relation[0].length).fill().map((v, idx) => (v = idx));
  const minimality = [];

  for (let i = 1; i <= relation[0].length; i++) {
    combination.push(...getCombination(arr, i));
  }

  combination.forEach((col) => {
    if (checkUnique(col, relation) && checkMinimality(col, minimality)) {
      answer += 1;
      minimality.push(col);
    }
  });

  return answer;
}
