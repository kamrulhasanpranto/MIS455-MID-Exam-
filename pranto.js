
function welcomeAlert() {
    alert("Congratulations! Use Promo Code: PRO2330658 to receive a 10% cash deduction at checkout!");
}

function handleFormSubmission() {
    var clientName = document.getElementById("usrName").value;
    var clientEmail = document.getElementById("usrEmail").value;
    var clientMsg = document.getElementById("usrMsg").value;

    if (clientName === "" || clientEmail === "" || clientMsg === "") {
        alert("Please complete all sections before passing the ticket.");
    } else {
        alert("Thank you, " + clientName + "! Your ticket has been logged. We will reach you at " + clientEmail);
        
        document.getElementById("usrName").value = "";
        document.getElementById("usrEmail").value = "";
        document.getElementById("usrMsg").value = "";
    }
}