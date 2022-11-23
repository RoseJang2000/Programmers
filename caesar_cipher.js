function solution(s, n) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            let a = s[i].toLowerCase();
            let sIdx = alpha.indexOf(a);
            let nIdx = sIdx + n <= alpha.length - 1 ? sIdx + n : (sIdx + n) - alpha.length;
            // sIdx + n : (sIdex + n) % 26 or sIdx + n : (sIdex + n) - 26 도 ok

            if (s[i] === a) result += alpha[nIdx];
            else result += alpha[nIdx].toUpperCase();
        } 
        else result += ' ';
    }
    
    return result;
}