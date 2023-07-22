function solution(str1, str2) {
  const arr1 = makeStr(str1);
  const arr2 = makeStr(str2);
  if (arr1.length === 0 && arr2.length === 0) return 65536;
  console.log(arr1, arr2);
  const same = [];
  const all = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      const idx = arr2.indexOf(arr1[i]);
      arr2.splice(idx, 1);
      same.push(arr1[i]);
    } else {
      all.push(arr1[i]);
    }
  }

  arr2.forEach((e) => all.push(e));

  const result = Math.floor((same.length / (same.length + all.length)) * 65536);
  return result;
}

function makeStr(array) {
  const arr = [];
  const regex = /^[a-z|A-Z]+$/;
  array.split('');
  for (let i = 1; i < array.length; i++) {
    const elem = array[i - 1] + array[i];
    if (regex.test(elem)) arr.push(elem.toLowerCase());
    else continue;
  }
  return arr;
}
