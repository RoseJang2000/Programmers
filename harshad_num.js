function solution(x) {
    let n = 0;
    while(x > 0) {
        n += x % 10;
        x = Math.floor(x / 10);
    }
    return x % n === 0;
}