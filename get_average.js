function solution(arr) {
    var answer = 0;
    answer = arr.reduce(function(sum, num) {
        sum += num;
        return sum;
    }, 0) / arr.length;
    return answer;
}