function fibo(number) {
  let element = [0, 1];
  for (let i = 0; i < number; i++) {
    element.push(element[i] + element[i + 1]);
  }
  return element;
}

let result = fibo(5);
console.log(result);
