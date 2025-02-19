function printMaxSubSquare(M, R, C) {
  let i, j;
  let S = [];

  // matrix aux do mesmo tamanho da matrix original
  for (var y = 0; y < R; y++) {
    S[y] = [];
    for (var x = 0; x < C; x++) {
      S[y][x] = 0;
    }
  }
  let max_of_s, max_i, max_j;

  /* Set first column of S[][]*/
  for (i = 0; i < R; i++) S[i][0] = M[i][0];

  /* Set first row of S[][]*/
  for (j = 0; j < C; j++) S[0][j] = M[0][j];

  /* Construct other entries of S[][]*/
  /**
   * Se na matrix original encontra um 1,
   * então se busca a esquerda, acima e na diagonal superior esquerda
   */
  for (i = 1; i < R; i++) {
    for (j = 1; j < C; j++) {
      if (M[i][j] == 1)
        S[i][j] = Math.min(S[i][j - 1], S[i - 1][j], S[i - 1][j - 1]) + 1;
      else S[i][j] = 0;
    }
  }
  console.log("S", S);

  /* Find the maximum entry, and indexes of maximum entry
      in S[][] */

  // max_of_s = S[0][0];
  // max_i = 0;
  // max_j = 0;
  // for (i = 0; i < R; i++) {
  //   for (j = 0; j < C; j++) {
  //     if (max_of_s < S[i][j]) {
  //       max_of_s = S[i][j];
  //       max_i = i;
  //       max_j = j;
  //     }
  //   }
  // }
}

const M = [
  [0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

printMaxSubSquare(M, M.length, M[0].length);
