function getPin() {
  const pin = Math.round(Math.random() * 10000);

  if (pin.toString().length == 4) {
    return pin;
    // console.log(pin);
  } else {
    //console.log(pin);
    getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("displayPin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("calc-input").value;
  calcInput = number.value;
  calcinput = number;
  /*  const previousNumber = calcinput.value;
  const newCalc = previousNumber.value;
  calcinput.value = newCalc; */
});
