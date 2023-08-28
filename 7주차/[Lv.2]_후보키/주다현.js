function solution(relation) {
  let answer = 0;
  let attrNum = relation[0].length;
  let combList = [];
  let keyList = [];
  // 조합 배열 생성
  for (let i = 1; i <= attrNum; i++) {
    comb(combList, [], 0, attrNum, i, 0);
  }
  // 각 조합에 따라 후보 키가 가능한지 체크하고 추가
  for (let i = 0; i < combList.length; i++) {
    addKey(keyList, combList[i], relation);
  }
  console.log(keyList);
  return keyList.length;
}
function addKey(keyList, key, relation) {
  // 최소성 체크
  // 이미 등록된 후보키의 배열을 포함하는 배열이 하나라도 존재하면 최소성 X
  let isMin = true;
  for (let i = 0; i < keyList.length; i++) {
    let prevKey = keyList[i];
    for (let j = 0; j < key.length; j++) {
      prevKey = prevKey.filter((ele) => ele !== key[j]);
    }
    if (prevKey.length === 0) {
      isMin = false;
    }
  }
  // 등록한 후보키가 하나도 없으면 최소성이 항상 만족되므로 패스
  if (keyList.length !== 0 && !isMin) {
    return;
  }
  let arr = [];
  let isUnique = true;
  // 유일성 체크
  // 키로 사용했을 때 하나라도 중복되면 유일성 X
  for (let i = 0; i < relation.length; i++) {
    let findEle = arr.find((ele) => {
      let flag = true;
      for (let j = 0; j < key.length; j++) {
        if (ele[key[j]] !== relation[i][key[j]]) flag = false;
      }
      return flag;
    });
    if (findEle !== undefined) {
      isUnique = false;
    } else {
      arr.push(relation[i]);
    }
  }
  // 유일성 만족하면 후보키로 등록
  if (isUnique) {
    keyList.push(key);
  }
}
// 조합 배열 생성
function comb(list, arr, idx, n, r, target) {
  if (r === 0) {
    list.push(Object.assign([], arr));
  } else if (target === n) {
    return;
  } else {
    arr[idx] = target;
    comb(list, arr, idx + 1, n, r - 1, target + 1);
    comb(list, arr, idx, n, r, target + 1);
  }
}
