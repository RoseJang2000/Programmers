function solution(n, m) {
    let n1 = n > m ? n : m;
    let n2 = n + m - n1;
    let gcd;
    
    if (n1 % n2 === 0 ) gcd = n2;
    else { 
        while(n2 !== 0) {
            gcd = n1 % n2;
            n1 = n2;
            n2 = gcd
        }
        gcd = n1;
    }
    
    return [gcd, (n*m)/gcd]
}