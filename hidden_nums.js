function solution(my_string) {
    let result = 0;
    const str = my_string.split('');
    
    str.forEach(el => {
        if (el / 1) result += el / 1;
    })
    
    return result;
}