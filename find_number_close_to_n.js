function solution(array, n) {
  const gap = [];
  let minIdx = 0;
  array.sort((a, b) => a - b);

  for (let i of array) {
    gap.push(Math.abs(n - i));
  }

  minIdx = gap.indexOf(Math.min(...gap));

  return array[minIdx];
}
