function solution(my_str, n) {
    let arr = [];
    let cnt = 0, i = 0;
    while(cnt < Math.ceil(my_str.length / n)) {
        arr[cnt] = my_str.slice(i, i + n);
        i += n;
        cnt ++
    }
    return arr;
}