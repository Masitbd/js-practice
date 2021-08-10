/* let sum = 0;
for (let i = 6; i > 0; i--) {
  sum = sum + i;
}
console.log(sum); */
function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}

console.log(sum(6));
/*
1.  6 + sum(6-1) = 6+sum(5)
2.  5 + sum(4)
3.  4 + sum(3)
4.  3 + sum(2)
5.  2 + sum(1)
6.  1 + sum(0)
total 21
 */
