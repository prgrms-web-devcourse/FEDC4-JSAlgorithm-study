function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let answer = 1;
  let camera = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    const [start, end] = routes[i];

    if (start <= camera) {
      continue;
    }

    camera = end;
    answer++;
  }

  return answer;
}
