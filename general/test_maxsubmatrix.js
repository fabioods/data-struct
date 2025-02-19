function printMaxSubSquare(M, R, C) {
  let S = [];
  let max_of_s, max_i, max_j;
  for (let y = 0; y < R; y++) {
    S[y] = [];
    for (let x = 0; x < C; x++) {
      S[y][x] = 0;
    }
  }

  for (let i = 0; i < R; i++) {
    S[i][0] = M[i][0];
  }
  for (let j = 0; j < C; j++) {
    S[0][j] = M[0][j];
  }

  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (M[i][j] === 1) {
        S[i][j] = Math.min(S[i][j - 1], S[i - 1][j], S[i - 1][j - 1]) + 1;
      }
    }
  }
  console.log("S", S);
  max_of_s = S[0][0];
  max_i = 0;
  max_j = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (max_of_s < S[i][j]) {
        max_of_s = S[i][j];
        max_i = i;
        max_j = j;
      }
    }
  }
  console.log("max_of_s", max_of_s);
}

const M = [
  [0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

printMaxSubSquare(M, M.length, M[0].length);
