// Login area button
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login_side");
    loginArea.style.display = "none";
    const transationArea = document.getElementById("transation_area");
    transationArea.style.display = "block";
});

// Deposite area button
const DepositBtn = document.getElementById("addDeposit");
DepositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    // add deposit number verification
    if (depositNumber < 0) {
        alert("Deposit amount can't be Negative or Less than 0");
    }
    else {
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depositAmount").value = "";

    }
});

// withdraw button event handler
const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    // working by withdraw/withdraw button and total balance
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";

    // console.log(withdrawNumber);
});

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    // current balance capture
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
