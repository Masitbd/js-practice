function count(input) {
  if (input <= 10) {
    return input * 10;
  } else if (input > 10 && input <= 20) {
    return (input - 10) * 50 + 10 * 10;
  } else {
    return (input - 20) * 100 + 10 * 10 + 10 * 50;
  }
}

const result = count(25);
console.log(result);
