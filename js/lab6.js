// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while(isNaN(investment) || investment  >= 10000 || investment < 0) {
    alert('Investment amount must be between $0.00 and $9999.99. Try again.');
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
}
rate = parseFloat(prompt('Enter interest rate as xx.x'));
while(isNaN(rate) || investment >= 6.0 || investment < 0) {
    alert('Interest rate amount must be between 0.0% and 6.0%. Try again.');
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
}
years = parseInt(prompt('Enter the number of years you want to invest for'));
while(isNaN(years) || years < 1 || years > 30) {
    alert('Number of years must be between 1 and 30. Try again.');
    years = parseInt(prompt('Enter the number of years you want to invest for'));
}
// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);