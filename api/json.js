/* const student = {
  name: "Murad",
  roll: 101,
  class: "csc",
  section: "B",
};

const stringfy = JSON.stringify(student);
console.log(stringfy);
console.log(student);
 */

const shop = {
  name: "alis store",
  addess: "ranbir road",
  products: ["laptop", "mobile", "pepsi"],
  isExpensive: false,
};

const result = console.log(JSON.stringify(shop));
console.log(shop);
console.log(JSON.parse(result));
