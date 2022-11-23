function solution(sizes) {
    let arr1 = sizes.map(el => Math.max(...el));
    let arr2 = sizes.map(el => Math.min(...el));
    return Math.max(...arr1) * Math.max(...arr2);
}