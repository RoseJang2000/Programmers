function solution(box, n) {
  // return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
  return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
}
