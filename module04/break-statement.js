const products = [
  { name: "samsung", price: 12000 },
  { name: "apple", price: 20000 },
  { name: "oppo", price: 8000 },
  { name: "sony", price: 800 },
  { name: "motorola", price: 11000 },
  { name: "huai", price: 7000 },
];

for (const product of products) {
  if (product.price > 10000) {
    continue;
  }
  console.log(product);
}
