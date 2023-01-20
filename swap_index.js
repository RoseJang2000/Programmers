function solution(my_string, num1, num2) {
  const answer = my_string.split('').map((str, idx) => {
    if (idx === num1) {
      return my_string[num2];
    } else if (idx === num2) {
      return my_string[num1];
    }
    return str;
  });

  return answer.join('');
}
