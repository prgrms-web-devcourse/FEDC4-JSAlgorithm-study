function solution(x, y, n) {
    const dp = {};
    let queue = [x];
    dp[x] = 0;
    if(x===y)return 0;
    while(queue.length){
        const new_queue = [];
        for (const target of queue){
            for(const next_target of [target+n,target*2,target*3]){
                if(dp[next_target]||next_target>y)continue;
                else if(next_target === y)return dp[target]+1;
                new_queue.push(next_target);
                dp[next_target] = dp[target]+1; 
            }
        }
        queue = new_queue;
    }
    return -1;
}