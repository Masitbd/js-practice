// slice
/* let arr = [1, 2, 5, 6, 89];
let result = arr.slice(-1);
console.log(result);
console.log(...arr); */

// splice
let arr = [1, 2, 5, 6, 89];
let arr1 = [2, 4, 2, 6, 89];
let result = arr.splice(-1);
console.log(result);
console.log(arr);

/* slice vs splice:
splice muted array but slice not */

//reverse
console.log(arr.reverse());
console.log([...arr, arr1]);
