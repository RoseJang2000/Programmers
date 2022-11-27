function solution(array, commands) {
    let answer = [];
    commands.forEach(el => {
        let arr = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
        answer.push(arr[el[2] - 1]);
    })
    return answer;
}