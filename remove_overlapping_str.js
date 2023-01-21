function solution1(my_string) {
  return [...new Set(my_string)].join('');
}

function solution2(my_string) {
  let answer = '';

  my_string.split('').map((str) => {
    if (!answer.includes(str)) {
      answer += str;
    }
  });

  return answer;
}
