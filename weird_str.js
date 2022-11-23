function solution(s) {
    return s.split(' ').map(el => {
        let str = '';
        for (let i = 0; i < el.length; i++) {
            str += i % 2 === 0 ? el[i].toUpperCase() : el[i].toLowerCase() ;
        }   // el을 다시 전체 split해서 map으로 푸는 것도 가능. 뭐가 더 빠를지는 잘 모르겠음
        return str;
    }).join(' ');
}