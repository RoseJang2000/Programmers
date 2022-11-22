function solution(s1, s2) {
    return s1.reduce((acc, cur) => {
        return s2.includes(cur) ? acc + 1 : acc ;
    }, 0)
    
    // return s1.filter(el => s2.includes(el)).length;
}