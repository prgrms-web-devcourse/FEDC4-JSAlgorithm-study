function solution(cacheSize, cities) {
  let answer = 0;
  let cacheMemory = [];

  if (cacheSize === 0) return 5 * cities.length;

  cities.forEach((v, i) => {
    v = v.toLowerCase();

    //cache hit일 경우
    if (cacheMemory.includes(v)) {
      answer += 1;
      if (cacheMemory.length >= cacheSize) cacheMemory.splice(cacheMemory.indexOf(v), 1);
      cacheMemory.push(v);
    }
    //cache miss일 경우
    else {
      answer += 5;
      if (cacheMemory.length >= cacheSize) cacheMemory.splice(0, 1);
      cacheMemory.push(v);
    }
  });

  return answer;
}
