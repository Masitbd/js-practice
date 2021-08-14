/* function factCheck(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
let result = factCheck(4);
console.log(result);
 */
function fact(n) {
  if (n == 1) {
    return 1;
  } else return n * fact(n - 1);
}

let result = fact(4);
console.log(result);
