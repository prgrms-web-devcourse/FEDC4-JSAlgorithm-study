function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const str1s = {};
  const str2s = {};
  let intersection = 0;
  const union = new Set();

  for (let i = 0; i < str1.length - 1; i++) {
    const word = str1[i] + str1[i + 1];

    if (!word.match(/[^A-Z]/g)) {
      str1s[word] = (str1s[word] || 0) + 1;
      union.add(word + str1s[word]);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const word = str2[i] + str2[i + 1];

    if (!word.match(/[^A-Z]/g)) {
      str2s[word] = (str2s[word] || 0) + 1;
      union.add(word + str2s[word]);
    }
  }

  for (const key in str1s) {
    if (key in str2s) {
      intersection += Math.min(str1s[key], str2s[key]);
    }
  }

  return !intersection && !union.size ? 65536 : Math.floor((intersection / union.size) * 65536);
}
