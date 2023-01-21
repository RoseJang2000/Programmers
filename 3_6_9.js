function solution1(order) {
  return (order + '').split('').filter((num) => num % 3 === 0 && num !== '0').length;
}

// * +정규표현식을 이용한 풀이

function solution2(order) {
  let answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
