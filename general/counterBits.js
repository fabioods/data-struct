var countBits = function (n) {
  let result = [];
  // percorre o array
  for (let i = 0; i <= n; i++) {
    // conta o total de bits 1 naquela posicao
    let counter = 0;
    console.log("counter ", counter, " i ", i);
    // variavel auxiliar para percorrer os bits
    let j = i;
    while (j > 0) {
      // se o bit for 1, incrementa o contador
      counter += j & 1;
      console.log("counter updated ", counter, " i ", i, " j ", j);
      // desloca o bit para a direita
      // por exemplo 0000 0110 (6) => 0000 0011 (3)
      j = j >> 1;
    }
    console.log("counter final ", counter, "\n");
    result[i] = counter;
  }
  return result;
};

// 0 => 0000 0000
// 1 => 0000 0001
// 2 => 0000 0010
// 3 => 0000 0011
// 4 => 0000 0100
// 5 => 0000 0101
console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
