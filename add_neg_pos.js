function solution(absolutes, signs) {
    // return absolutes.reduce((prev, cur, i) => {
    //     return prev + cur * (signs[i] ? 1 : -1);
    // }, 0)
    return absolutes.reduce((prev, cur, i) => {
        return prev + (signs[i] ? cur : -cur);
    }, 0)
}