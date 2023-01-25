function solution(score) {
  const avg = score.map((el) => (el[0] + el[1]) / 2);
  const sortedScore = avg.slice().sort((a, b) => b - a);

  return avg.map((el) => sortedScore.indexOf(el) + 1);
}
