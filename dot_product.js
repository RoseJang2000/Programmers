function solution(a, b) {
    return a.map((n, i) => n * b[i]).reduce((acc, cur) => acc + cur);
    
    // return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}