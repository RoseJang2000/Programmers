function solution(common) {
    var answer = 0;
    
    let gap = common[1] - common[0];
    
    if (common[1] + gap === common[2]) {
        answer = common[common.length - 1] + gap;
    } else {
        gap = common[1] / common[0]
        answer = common[common.length - 1] * gap;
    }
    
    return answer;
}