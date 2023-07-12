function solution(cacheSize, cities) {
  const cacheArr = [];
  const lowercaseCities = cities.map((city) => city.toLowerCase());

  return lowercaseCities.reduce((acc, city) => {
    const cacheIndex = cacheArr.indexOf(city);
    if (cacheIndex !== -1) {
      cacheArr.splice(cacheIndex, 1);
      cacheArr.push(city);
      acc += 1;
    } else {
      cacheArr.push(city);
      acc += 5;
    }
    if (cacheArr.length > cacheSize) {
      cacheArr.shift();
    }
    return acc;
  }, 0);
}
