function updateCase(product, price, isIncreasing) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;
  if (isIncreasing) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }

  caseInput.value = caseNumber;
  // update total

  const caseTtoal = document.getElementById(product + "-total");
  console.log(caseTtoal);
  caseTtoal.innerText = caseNumber * price;

  calculateTotal();
}

function calculateTotal() {
  const phoneInput = document.getElementById("case-number").value;
  const phoneNumber = parseInt(phoneInput);

  const caseInput = document.getElementById("phone-number").value;
  const caseNumber = parseInt(caseInput);

  const totalAnount = phoneNumber * 1219 + caseNumber * 59;

  const totalvat = parseInt(parseInt(totalAnount) * 0.1);
  const totalPayable = parseInt(totalAnount) + parseInt(totalvat);

  document.getElementById("subTotal").innerText = totalAnount;
  document.getElementById("Tax").innerText = totalvat;
  document.getElementById("Total").innerText = totalPayable;

  console.log(totalPayable);
  console.log(totalvat);
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCase("case", 1219, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCase("case", 1219, false);
});

document.getElementById("phone-plus").addEventListener("click", function () {
  updateCase("phone", 59, true);
  calculateTotal();
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCase("phone", 59, false);
});
