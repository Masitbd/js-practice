function kilometerToMeter(number) {
  if (number < 0) {
    console.log("Please enter positive number");
  } else {
    const convertMeter = number * 1000;
    return convertMeter;
  }
}

let input = 11;
const result = kilometerToMeter(input);
console.log(result);
