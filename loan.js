function calculateLoan() {
    // Get user input
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value / 100 / 12; // Monthly interest rate
    var loanTerm = document.getElementById('loanTerm').value * 12; // Total number of payments

    // Calculate monthly payment
    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    // Calculate total payment and total interest
    var totalPayment = monthlyPayment * loanTerm;
    var totalInterest = totalPayment - loanAmount;

    // Display results with ₹ symbol
    document.getElementById('monthlyPayment').innerHTML = 'Monthly Payment: ₹' + monthlyPayment.toFixed(2);
    document.getElementById('totalPayment').innerHTML = 'Total Payment: ₹' + totalPayment.toFixed(2);
    document.getElementById('totalInterest').innerHTML = 'Total Interest: ₹' + totalInterest.toFixed(2);
}
