function solution(before, after) {
  const bef = before.split('').sort().join('');
  const aft = after.split('').sort().join('');

  return bef === aft ? 1 : 0;
}
