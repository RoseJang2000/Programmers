function solution(s) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let result = s;
    for(let i = 0; i < 10; i++) {
        result = result.split(num[i]).join(i);
    }
    return Number(result);
}