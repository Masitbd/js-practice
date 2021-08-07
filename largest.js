function largest(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const ages = [12, 18, 34, 32, 56, 2];
const oldest = largest(ages);
console.log(oldest);
