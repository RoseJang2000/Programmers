function solution(n) {
    return (n + '').split('').reverse('').map(el => el/1);
    // let result = [];
    // do{
    //     result.push(n % 10);
    //     n = Math.floor(n / 10);
    // } while (n > 0);
    // return result;
}