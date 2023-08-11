function solution(routes) {
    let ans = 0;
    
    // 진입 지점을 기준으로 2차원 배열 정렬
    routes.sort((a,b) => a[0] - b[0])
    
    let camera = routes[0][1]; // -15
    for(let i = 1; i < routes.length ; i++){
        if(routes[i][0] <= camera){
            if(routes[i][1] < camera) camera = routes[i][1]
        }else{
            ans++;
            camera = routes[i][1]
        }
    }
    // 마지막에 남는 카메라는 따로 +1 추가
    return ans+1
}