function solution(bridgeLen, weight, truckWeis) {
  let time = 0;
  const passeds = [];
  const crossings = [];
  const totalLen = truckWeis.length;
  const waitings = truckWeis.map((value) => {
    return { truck: value, cnt: 0 };
  });

  while (passeds.length !== totalLen) {
    if (crossings.length) {
      if (crossings[0].cnt === bridgeLen) {
        passeds.push(crossings.shift());
      }
    }

    if (waitings.length > 0) {
      crossings.push(waitings.shift());
    }

    if (crossings.reduce((acc, cur) => acc + cur.truck, 0) > weight) {
      waitings.unshift(crossings.pop());
    }

    for (const crossing of crossings) {
      crossing.cnt++;
    }

    time++;
  }

  return time;
}
