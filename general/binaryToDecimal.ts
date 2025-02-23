function convert(value: string): number {
  let decimal = 0;
  let size = value.length - 1;

  for (let v = 0; v <= size; v++) {
    const bit = Number(value[v]); // 1
    const power = size - v;
    decimal += bit * Math.pow(2, power);
  }

  return decimal;
}

function convertToSixBase(n: string): string {
  let decimal = convert(n);
  let value = "";

  while (decimal > 0) {
    const mod = decimal % 6;
    value = `${mod}${value}`;
    decimal = Math.floor(decimal / 6);
  }

  return value;
}

const n = "100111"; // 8+2+1 = 11
const value = convert(n);
console.log("value ", value);
console.log("six ", convertToSixBase("100111"));
