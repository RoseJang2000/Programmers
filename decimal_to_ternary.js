function solution(n, arr1, arr2) {
    let bin1 = arr1.map(el => el.toString(2).padStart(n, '0'));
    let bin2 = arr2.map(el => el.toString(2).padStart(n, '0'));
    
    return bin1.map((el, i) => {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (el[j] === '1' || bin2[i][j] === '1') str += '#';
            else str += ' ';
        }
        return str;
    });
}