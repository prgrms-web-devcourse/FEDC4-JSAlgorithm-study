function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((x) => {
    let city = x.toUpperCase();

    if (cache.includes(city)) {
      answer += 1;
      cache.splice(cache.indexOf(city), 1);
    } else {
      answer += 5;
      if (cache.length >= cacheSize) cache.shift();
    }
    cache.push(city);
  });
  return answer;
}
