document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const depositAmount = depositInput.value;

    // get current deposit

    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText =
      parseFloat(depositAmount) + parseFloat(depositTotalText);

    //update total balance
    const balanceTotal = document.getElementById("balance-total");

    const totalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(totalText);

    balanceTotal.innerText = previousBalanceTotal + parseFloat(depositAmount);

    // clear input field

    depositInput.value = "";
  });

// withdrawl
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawlInput = document.getElementById("withdraw-input");

    const withdrawlAmountText = withdrawlInput.value;

    // update withdrawl totlal

    const withdrawlTotal = document.getElementById("withdraw-total");
    const withdrawlTotalText = withdrawlTotal.innerText;

    withdrawlTotal.innerText =
      parseFloat(withdrawlTotalText) + parseFloat(withdrawlAmountText);

    const totalbalance = document.getElementById("balance-total");

    const totalbalanceText = totalbalance.innerText;

    const newBalance =
      parseFloat(totalbalanceText) - parseFloat(withdrawlAmountText);

    totalbalance.innerText = newBalance;
    // clear text
    withdrawlInput.value = "";
  });
