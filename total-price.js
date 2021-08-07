const products = [
  {
    name: "linovo",
    price: 6000,
    worranty: "yes",
  },
  {
    name: "shair",
    price: 2000,
    qty: 3,
  },
  {
    name: "phone",
    price: 8000,
    worranty: "yes",
  },
];

let total = 0;
for (product of products) {
  total = total + product.price;
}
console.log(total);
