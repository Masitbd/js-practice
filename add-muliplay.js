function woodCalculator(chaitqty, tableqty, bedqty) {
  const perchairwood = 3;
  const pertablewood = 10;
  const perbedwood = 50;
  const chairqty = chaitqty * perchairwood;
  const tableqty = tableqty * pertablewood;
  const bedqty = bedqty * perbedwood;
  const torlaqty = chaitqty + tableqty + bedqty;
  return torlaqty;
}

const result = woodCalculator(10, 10, 10);
console.log(result);
