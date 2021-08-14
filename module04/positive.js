function onlyPositive(input) {
  let container = [];
  for (let price of prices) {
    //console.log(price);
    if (price >= 0) {
      container.push(price);
    } else {
      break;
    }
  }
  return container;
}

let prices = [10, 20, 3, 2, 12, 0, 66, -7, 33];
const result = onlyPositive(prices);
console.log(result);
