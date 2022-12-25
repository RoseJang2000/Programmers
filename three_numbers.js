function solution(number) {
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
    });
    return results;
  };
  const cases = getCombinations(number, 3);
  const isZero = cases.map((numbers) => numbers.reduce((a, c) => a + c) === 0);

  return isZero.filter((el) => el).length;
}
