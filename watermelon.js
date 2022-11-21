function solution(n) {
    // let s = '수박'.repeat(Math.ceil(n/2)).split('');
    // s.length = n;
    // return s.join('');
    return '수박'.repeat(n/2 + 1).slice(0, n);
}