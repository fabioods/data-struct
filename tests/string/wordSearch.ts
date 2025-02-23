function exists(board: string[][], word: string): boolean {
  if (!board || !word) {
    return false;
  }

  const points = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function search(
    i: number,
    j: number,
    board: string[][],
    word: string,
    letterIdx: number
  ): boolean {
    if (letterIdx >= word.length) {
      return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return false;
    }
    const cell = board[i][j];
    if (cell !== word[letterIdx]) {
      return false;
    }

    board[i][j] = "*";

    for (let s = 0; s < points.length; s++) {
      if (
        search(i + points[s][0], j + points[s][1], board, word, letterIdx + 1)
      )
        return true;
    }
    board[i][j] = cell;
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cell = board[i][j];
      if (cell !== word[0]) {
        continue;
      }
      if (search(i, j, board, word, 0)) return true;
    }
  }
  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const existsWord = exists(board, "ABCCED");
console.log("Find ", existsWord);
