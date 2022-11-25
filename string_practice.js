function solution(s) {
    let isNum = false;
    if (s.length === 4 || s.length === 6) {
        let arr = s.split('').filter(el => isNaN(+el));
        isNum = !arr.length ? true : false;
    }
    return isNum;
}