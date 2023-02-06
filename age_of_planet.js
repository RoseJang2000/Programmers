function solution(age) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  (age + '').split('').forEach((el) => {
    answer += alpha[el * 1];
  });
  return answer;
}
