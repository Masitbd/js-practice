/* let a = 50;
let b = 40;
let c = 60;

if (a > b && a > c) {
  console.log(a);
} else if (b > c && b > a) {
  console.log(b);
} else {
  console.log(c);
} */

function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else {
    return c;
  }
}

let result = findLargest(50, 40, 60);
console.log(result);
