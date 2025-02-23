const points = [-1, 0, 1];

function connectedCell(matrix: number[][]): number {
  if (!matrix) return 0;
  const sizeI = matrix.length;
  const sizeJ = matrix[0].length;
  const arrVisited: boolean[][] = Array.from({ length: sizeI }, () =>
    Array(sizeJ).fill(false)
  );

  let maxValue = 0;

  function dfs(i: number, j: number): number {
    if (
      i < 0 ||
      i >= sizeI ||
      j < 0 ||
      j >= sizeJ ||
      matrix[i][j] === 0 ||
      arrVisited[i][j]
    ) {
      return 0;
    }

    arrVisited[i][j] = true;
    let size = 1;

    for (let di of points) {
      for (let dj of points) {
        if (di !== 0 || dj !== 0) {
          size += dfs(i + di, j + dj);
        }
      }
    }
    return size;
  }

  for (let i = 0; i < sizeI; i++) {
    for (let j = 0; j < sizeJ; j++) {
      if (matrix[i][j] === 1 && !arrVisited[i][j]) {
        maxValue = Math.max(maxValue, dfs(i, j));
      }
    }
  }

  console.log("arr ", arrVisited);
  return maxValue;
}
