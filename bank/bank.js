// get input value function

function getInputValue(inputId, balanceId, isDeposit) {
  let getInput = document.getElementById(inputId + "-input");
  let inputValue = parseFloat(getInput.value);

  if (inputValue > 0) {
    let getId = document.getElementById(balanceId);
    let previpusAmount = parseFloat(getId.innerText);
    let newDeposit = (getId.innerText = previpusAmount + inputValue);

    let currentBalance = document.getElementById("current-balance");
    let balance = parseFloat(currentBalance.innerText);

    if (isDeposit == true) {
      let balanceAfterDeposit = balance + inputValue;
      currentBalance.innerText = balanceAfterDeposit;
    } else {
      let balanceAfterDeposit = balance - inputValue;
      currentBalance.innerText = balanceAfterDeposit;
    }
  }

  getInput.value = "";
}

// set input value function

function setInput() {}
document.getElementById("deposit-button").addEventListener("click", () => {
  getInputValue("deposit", "totalDeposit", true);
});
document.getElementById("withdraw-button").addEventListener("click", () => {
  getInputValue("withdraw", "previous-withdraw", false);
});
