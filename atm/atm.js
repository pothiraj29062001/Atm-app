let correctAccountNumber = "123456";
let correctPassword = "password";
let remainingAttempts = 3;

function displayMessage(message) {
    document.getElementById("message").textContent = message;
    document.getElementById("correctBtn").style.display = "inline-block";
}

function resetForm() {
    document.getElementById("accountNumber").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("correctBtn").style.display = "none";
}

function atm() {
    let enteredAccountNumber = document.getElementById("accountNumber").value;
    let enteredPassword = document.getElementById("password").value;

    if (enteredAccountNumber === "" || enteredPassword === "") {
        displayMessage("Please enter account number and password.");
    } else if (enteredAccountNumber === correctAccountNumber && enteredPassword === correctPassword) {
        displayMessage("Access granted. You can now withdraw money.");
        document.getElementById("submitBtn").style.display = "none";
    } else {
        remainingAttempts--;
        if (remainingAttempts > 0) {
            displayMessage(`Incorrect account number or password. You have ${remainingAttempts} attempts left.`);
        } else {
            displayMessage("Incorrect account number or password. You have no attempts left.");
            document.getElementById("submitBtn").style.display = "none";
            document.getElementById("restartBtn").style.display = "block";
        }
    }
}

function restartPage() {
    window.location.reload();
}
