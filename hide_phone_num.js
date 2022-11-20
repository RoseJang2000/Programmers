function solution(phone_number) {
    let arr = phone_number.split('');
    for (let i = 0; i < arr.length - 4; i++) {
        arr.splice(i, 1, '*');
    }
    return arr.join('');
    // var result = "*".repeat(s.length - 4) + s.slice(-4);
}