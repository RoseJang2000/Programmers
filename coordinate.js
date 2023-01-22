function solution(keyinput, board) {
  const answer = [0, 0];

  keyinput.forEach((action) => {
    switch (action) {
      case 'up':
        if (answer[1] >= Math.floor(board[1] / 2)) {
          break;
        }
        answer[1]++;
        break;
      case 'down':
        if (answer[1] <= -Math.floor(board[1] / 2)) {
          break;
        }
        answer[1]--;
        break;
      case 'left':
        if (answer[0] <= -Math.floor(board[0] / 2)) {
          break;
        }
        answer[0]--;
        break;
      case 'right':
        if (answer[0] >= Math.floor(board[0] / 2)) {
          break;
        }
        answer[0]++;
        break;
    }
  });

  return answer;
}
