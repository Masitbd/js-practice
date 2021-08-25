function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInText = inputField.value;
  const value = parseFloat(valueInText);
  inputField.value = "";
  return value;
}

function updateToral(fielId, amount) {
  const totalTag = document.getElementById(fielId);
  const previousTotalinText = totalTag.innerText;
  const previousTotal = parseFloat(previousTotalinText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
}

function updateBalance(amount, isAdding) {
  const balanceTag = document.getElementById("balance-total");
  const balanceInText = balanceTag.innerText;
  const previousBalance = parseFloat(balanceInText);
  if (isAdding == true) {
    const newBalance = previousBalance + amount;
    balanceTag.innerText = newBalance;
  } else {
    const newBalance = previousBalance - amount;
    balanceTag.innerText = newBalance;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    if (amount > 0) {
      updateToral("deposit-total", amount);
      updateBalance(amount, true);
    }
  });

/* handle withdrawl */

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    if (amount > 0) {
      updateToral("withdraw-total", amount);
      updateBalance(amount, false);
    }
  });
