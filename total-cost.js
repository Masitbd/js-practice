const totals = [
  {
    name: "linovo",
    price: 6000,
    worranty: "yes",
  },
  {
    name: "linovo",
    price: 2000,
    worranty: "yes",
  },
  {
    name: "oppo",
    price: 8000,
    worranty: "yes",
  },
];
let container = totals[0];
for (let total of totals) {
  if (total.price < container.price) {
    container = total;
  }
}
console.log(container);
