const phones = [
  {
    name: "apple",
    price: 45000,
    storage: 256,
  },
  {
    name: "samaung",
    price: 25000,
    storage: 64,
  },
  {
    name: "nokia",
    price: 5000,
    storage: 56,
  },
  {
    name: "walton",
    price: 15000,
    storage: 120,
  },
];
let chepest = phones[0];
for (phone of phones) {
  if (phone.price < chepest.price) {
    chepest = phone;
  }
}
console.log(chepest);
