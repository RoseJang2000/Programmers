function solution(quiz) {
    return quiz.map(el => {
        const [q, a] = el.split('=');
        return eval(q) === Number(a) ? "O" : "X" ;
    })
}