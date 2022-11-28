function solution(d, budget) {
    d.sort((a, b) => a - b);
    let result = 0, count = 0;
    for (let i = 0; i < d.length; i ++) {
        if (result >= budget) break;
        else {
            result += d[i];
            count++;
        }
    }
    return result > budget ? count - 1 : count ;
}