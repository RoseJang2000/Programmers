function solution(my_string) {
  const answer = my_string
    .split('')
    .filter((el) => !isNaN(el))
    .map((el) => Number(el));
  return answer.sort((a, b) => a - b);
}
