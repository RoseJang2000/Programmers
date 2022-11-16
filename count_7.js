function solution(array) {
    var answer = 0;
    
    for(let i of array) {
        for(let j = 0; j < i.toString().length; j++)
            {
                if(i.toString()[j] === '7') {
                    answer++;
                }
            }
    }
    
    return answer;
}