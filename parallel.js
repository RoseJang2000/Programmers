function solution(dots) {
  const slopeArr = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const curLean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (slopeArr.includes(curLean)) {
        return 1;
      }
      slopeArr.push(curLean);
    }
  }
  return 0;
}
