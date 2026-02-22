const welcomeTEXT = document.querySelector('.welcome-text');
const welcomeDIV = document.querySelector('.welcome');
const calculator = document.querySelector('.calculator');
const kindOfExpensesDIV = document.querySelector('.kind-of-expenses');
const addExpenses = document.querySelector('#add-expense');
const closeKindOfExpenses = document.querySelector('#close-kind-of-expenses');
let nameOfExpense = [];
let amountOfExpense = [];
function welcome() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    welcomeTEXT.textContent = `Witam wchodzisz do kalkulatora wydatków ${hours}:${minutes<10 ? "0" + minutes : minutes}`;
}
function clearWelcome() {
    welcomeDIV.style.display = 'none';
    calculator.style.display = 'block';
}
function kindOfExpenses() {
    kindOfExpensesDIV.classList.add('kind-of-expenses-container');
    calculator.style.display = 'none';
}
welcome();
setTimeout(clearWelcome, 5000);
addExpenses.addEventListener('click', kindOfExpenses);
closeKindOfExpenses.addEventListener('click', () => {
    kindOfExpensesDIV.classList.remove('kind-of-expenses-container');
    calculator.style.display = 'block';
});