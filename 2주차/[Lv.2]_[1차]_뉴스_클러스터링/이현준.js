function strSplit(str) {
  const strArray = [];

  for (let i = 0; i < str.length - 1; i++) {
    const element = (str[i] + str[i + 1]).toUpperCase();
    if (/^[A-Z]*$/.test(element)) {
      strArray.push(element);
    }
  }

  return strArray;
}

function solution(str1, str2) {
  str1 = strSplit(str1);
  str2 = strSplit(str2);

  const totalStrLength = str1.length + str2.length;
  if (totalStrLength === 0) return 65536;

  const intersection = [];
  str1.forEach((element) => {
    const elementIndex = str2.indexOf(element);

    if (elementIndex !== -1) {
      str2.splice(elementIndex, 1);
      intersection.push(element);
    }
  });

  return Math.floor((intersection.length / (totalStrLength - intersection.length)) * 65536);
}
