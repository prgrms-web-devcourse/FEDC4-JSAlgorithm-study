function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  while (cities.length > 0) {
    const item = cities.shift().toLowerCase();
    let idx = cache.indexOf(item);
    if (idx !== -1) {
      cache.splice(idx, 1);
      cache.push(item);
      answer += 1;
    } else {
      cache.push(item);
      answer += 5;
    }
    if (cache.length > cacheSize) {
      cache.shift();
    }
  }
  return answer;
}
