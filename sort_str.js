function solution(strings, n) {
    strings.sort((a, b) => {
        let an = a[n];
        let bn = b[n];
        
        if (an === bn) return (a > b) - (a < b);
        else return (an > bn) - (an < bn);
    })
    
    return strings;
    
    // return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}