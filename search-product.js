const products = [
  { name: "samsung", price: 12000 },
  { name: "apple", price: 20000 },
  { name: "oppo", price: 8000 },
  { name: "motorola", price: 11000 },
];

function searchProduct(products, searchText) {
  const findArray = [];
  for (const product of products) {
    if (product.name.indexOf(searchText) != -1) {
      findArray.push(product.name);
      /*  // to get the full product
      findArray.push(product); */
    }
  }
  return findArray;
}

const result = searchProduct(products, "o");
console.log(result);
