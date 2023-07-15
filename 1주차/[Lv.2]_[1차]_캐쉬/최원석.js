function solution(cacheSize, cities) {
  let hit = 0;
  const caches = [];
  let arr = [];
  cities = cities.map((v) => v.toUpperCase());

  for (let i = 0; i < cities.length; i++) {
    arr.push(cities[i]);
    arr = arr.filter((v, i) => arr.lastIndexOf(v) === i);

    if (arr.length > cacheSize) {
      arr.shift();
    }

    caches.push([...arr]);

    if (i === 0) {
      hit += 5;
      continue;
    }

    if (
      caches[i].filter((curValue) => caches[i - 1].some((prevValue) => prevValue === curValue)).length ===
      caches[i].length
    ) {
      hit++;
    } else {
      hit += 5;
    }
  }

  return cacheSize ? hit : cities.length * 5;
}
