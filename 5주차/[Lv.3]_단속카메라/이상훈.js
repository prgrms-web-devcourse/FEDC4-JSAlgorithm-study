function solution(routes) {
  let camera = -30001;

  routes = routes.sort((a, b) => a[1] - b[1]);

  return routes.reduce((answer, route) => {
    const [enter, leave] = route;

    if (camera < enter) {
      camera = leave;
      answer++;
    }

    return answer;
  }, 0);
}
