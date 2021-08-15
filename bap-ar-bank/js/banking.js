// handle deposit button event
let deposit = 0;
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    let addDeposit = document.getElementById("deposit-input");
    let addDepositValue = addDeposit.value;
    console.log(addDepositValue);
    deposit = parseInt(deposit) + parseInt(addDepositValue);
    console.log(deposit);

    console.log("button ckicked");

    document.getElementById("add-deposit").innerText = deposit;

    const totalDeposit = document.getElementById("add-deposit").innerText;

    // find updated balance balance
    const balancCurrent = document.getElementById("balance-id").innerText;

    /* const findBalance = balancCurrent.innerText;
    console.log(findBalance); */
    /* const updatedBalance = parseInt(totalDeposit) + parseInt(balancCurrent);
    console.log(balancCurrent); */

    const updatedBalance = parseInt(addDepositValue) + parseInt(balancCurrent);

    document.getElementById("balance-id").innerText = updatedBalance;

    // withdrawl
    let withdrawl = 0;
    document
      .getElementById("Withdrawl-button")
      .addEventListener("click", function () {
        //console.log("clicked");
        let addWithdrawl = document.getElementById("Withdrawl-input");
        let addWithdrawlValue = addWithdrawl.value;
        console.log(addWithdrawlValue);

        withdrawl = parseInt(withdrawl) + parseInt(addWithdrawlValue);
        console.log(withdrawl);

        console.log("button ckicked");

        document.getElementById("withdrawl-money").innerText = withdrawl;

        /*  const totalDeposit = document.getElementById("add-deposit").innerText; */
      });

    // update balance

    const updateWithdrawdBalance =
      parseInt(balancCurrent) - parseInt(addWithdrawlValue);

    document.getElementById("balance-id").innerText = updatedBalance;

    addDeposit.value = "";
    addWithdrawl.value = "";
  });
