function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let answer = 0;
  let camera = -30001;

  for (const route of routes) {
    const [start, end] = route;

    if (start <= camera) {
      continue;
    }

    camera = end;
    answer++;
  }

  return answer;
}
