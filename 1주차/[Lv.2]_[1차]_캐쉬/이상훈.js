function solution(cacheSize, cities) {
  const cache = [];

  if (cacheSize === 0) return cities.length * 5;
  cities = cities.map((city) => city.toLowerCase());

  return cities.reduce((answer, city) => {
    const cacheIndex = cache.findIndex((item) => item === city);
    const runtime = cacheIndex !== -1 ? 1 : 5;

    if (cacheIndex !== -1) cache.splice(cacheIndex, 1);
    else if (cache.length === cacheSize) cache.shift();
    cache.push(city);

    return answer + runtime;
  }, 0);
}
