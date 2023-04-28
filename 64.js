const d1 = [17, 21, 23];
const d2 = [12, 5, -5, 0, 4];

function printTemperature(arr) {
  let len = arr.length;
  let x = "";
  for (let i = 0; i < len; i++) {
    x += " ... " + arr[i] + " C in " + (i + 1) + " days";
  }
  x += " ...";
  return x;
}

console.log(printTemperature(d1));
console.log(printTemperature(d2));
