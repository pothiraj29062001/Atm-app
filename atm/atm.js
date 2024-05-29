let correctAccountNumber = "123456";
let correctPassword = "password";
let remainingAttempts = 3;

function displayMessage(message) {
    document.getElementById("message").textContent = message;
    document.getElementById("submitBtn").style.display = ""
    document.getElementById("correctBtn").style.display = "inline-block"
}

function resetForm() {
    document.getElementById("accountNumber").value =""
    document.getElementById("password").value =""
    document.getElementById("submitBtn").style.display ="block"
    document.getElementById("correctBtn").style.display ="block"
    document.getElementById("restartBtn").style.display ="block"
}

function atm() {
    let enteredAccountNumber = document.getElementById("accountNumber").value
    let enteredPassword = document.getElementById("password").value
    
    if(enteredAccountNumber==0 && enteredPassword==0){
        displayMessage("enter accountnumber and passowrd")
    }
    else if (enteredAccountNumber === correctAccountNumber && enteredPassword === correctPassword) {
        displayMessage("Access granted. You can now withdraw money.")
    } 
    else {
        remainingAttempts--
        if (remainingAttempts > 0) {
            displayMessage("Incorrect account number or password. You have " + remainingAttempts + " attempts left.")
        } else {
            document.getElementById("container").style.display =""
            document.getElementById("restartBtn").style.display ="block"
        }
    }
}

function restartPage() {
    window.location.reload()
}