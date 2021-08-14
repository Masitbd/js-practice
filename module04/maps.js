const currencies = new Map([
  ["USD", "United states doller"],
  ["EURO", "euro"],
  ["GDP", "pound starling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
