/* let sum = 1;
function fact(n) {
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}
const result = fact(4);
console.log(result);

 */
function fact(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

const result = fact(6);
console.log(result);
