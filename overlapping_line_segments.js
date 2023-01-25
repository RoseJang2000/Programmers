function solution(lines) {
  const lineMap = new Array(200).fill(0);

  lines.forEach((line) => {
    for (let i = line[0]; i < line[1]; i++) {
      lineMap[i + 100] += 1;
    }
  });

  return lineMap.filter((num) => num > 1).length;
}
