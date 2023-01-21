function solution(my_string) {
  const answer = my_string.split('').map((str) => {
    if (str === str.toUpperCase()) {
      return str.toLowerCase();
    } else if (str === str.toLowerCase()) {
      return str.toUpperCase();
    }
  });

  return answer.join('');
}
