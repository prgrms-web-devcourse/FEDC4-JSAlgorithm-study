function solution(routes) {
  const result = [];
  routes.sort((a,b) => b[0]-a[0]);
  for(let i = routes.length-1; i>0; i--){
      if(routes[i][1]>=routes[i-1][0]){
          const last_way = routes.pop();
          routes[i-1][1] = last_way[1]>routes[i-1][1]?routes[i-1][1]:last_way[1];
      }else{
          result.push(routes.pop());
      }
  }
  return routes.length+result.length;
}