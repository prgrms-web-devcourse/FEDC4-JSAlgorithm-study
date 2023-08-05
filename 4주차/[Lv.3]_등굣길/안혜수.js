function solution(m, n, puddles) {
    var answer = 0;
    let route = Array.from({ length: n }, () => Array(m).fill(0));
    for (const pool of puddles) {
        route[pool[1] - 1][pool[0] - 1] = 1;
    }
    function dfs(y, x) {
        if (y === n - 1 && x === m - 1) {
            answer++;
            answer %= 1000000007
        }
        if (x < m - 1) {
            if (route[y][x + 1] !== 1) dfs(y, x + 1);
        }
        if (y < n - 1) {
            if (route[y + 1][x] !== 1) dfs(y + 1, x);
        }
    }
    dfs(0, 0);
    return answer % 1000000007;
}