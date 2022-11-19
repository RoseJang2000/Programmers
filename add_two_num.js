function solution(numbers) {
    var answer = [];
    numbers.map((n, i) => {
        for(let j = i+1; j < numbers.length; j++){
            if(!answer.includes(n + numbers[j])) answer.push(n + numbers[j]);
        }
    })
    return answer.sort((a, b) => a - b);
}