const welcomeTEXT = document.querySelector('.welcome-text');
const welcomeDIV = document.querySelector('.welcome');
const calculator = document.querySelector('.calculator');
const kindOfExpensesDIV = document.querySelector('.kind-of-expenses');
const addExpenses = document.querySelector('#add-expense-menu');
const closeKindOfExpenses = document.querySelector('#close-kind-of-expenses');
const incomeInput = document.querySelector('#income');
const addingComm = document.querySelector('.adding-comm');
const expensesNameInput = document.querySelector('#expenses-name');
const expensesAmountInput = document.querySelector('#expenses-amount');
const addExpenseButton = document.querySelector('#add-expense-button');
const expensesList = document.querySelector('.expenses-list');
const expensesListContainer = document.querySelector('.expenses-list-container');
let balance = 0;
let nameOfExpense = [];
let amountOfExpense = []; 
let i=0;
let j=0;
let NameStatus = false;
let AmountStatus = false;
//TODO: funkcja do obliczania pozostałego budżetu po dodaniu wydatków, aktualizująca wyświetlanie pozostałego budżetu i ewentualnie pokazująca komunikat o przekroczeniu budżetu.
function remainingBalance() {
}
//TODO: funkcja do obliczania procentowego udziału każdego wydatku w stosunku do dochodu, aktualizująca wyświetlanie tych informacji przy każdym dodaniu wydatku.
function budgetPercentage() {
}
//wejsciowy komunikat
function welcome() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    welcomeTEXT.textContent = `Witam wchodzisz do kalkulatora wydatków ${hours}:${minutes<10 ? "0" + minutes : minutes}`;
}
//czyszczenie komunikatu i pokazanie kalkulatora
function clearWelcome() {
    welcomeDIV.classList.add('hidden');
    calculator.classList.add('visable');
    expensesList.hidden = false;
}
function clearAddingComm() {
    addingComm.classList.add('hidden');
}
function addingCommVisible() {
    addingComm.classList.remove('hidden');
}
function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.classList.add(type);
    messageDiv.textContent = text;
    addingComm.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.remove();
    }, 2000);}
//pokazanie formularza do dodawania wydatków
function kindOfExpenses() {
    const incomeValue = parseFloat(incomeInput.value);
    if (isNaN(incomeValue) || incomeValue <= 0) {
        
       // alert('Proszę wprowadzić poprawny dochód przed dodaniem wydatków');
       showMessage('Proszę wprowadzić poprawny dochód przed dodaniem wydatków', 'not-added');
        return;
    }else{
    balance = incomeValue;
   // alert(`Twój dochód to: ${balance} zł`);
    showMessage('Możesz teraz dodać swoje wydatki', 'added');
    kindOfExpensesDIV.classList.add('kind-of-expenses-container');
    calculator.classList.remove('visable');
    expensesList.classList.add('hidden');
    }
}
function addNameOfExpense() {
    if (expensesNameInput.value.trim() === '') {
        
        showMessage('Nazwa nie może być pusta', 'not-added');
        
        return;
    }else{
        nameOfExpense[i]= expensesNameInput.value.trim();
        i++;
        NameStatus = true;
    }
} 
 
function addAmountOfExpense() {
    if(isNaN(parseFloat(expensesAmountInput.value)) || parseFloat(expensesAmountInput.value) <= 0) {    
        
        showMessage('Kwota wydatku musi być liczbą dodatnią', 'not-added');
        return;
    }else{
        amountOfExpense[j]= parseFloat(expensesAmountInput.value);
        j++;
        AmountStatus = true;
    }
} 
function clearExpenseInputs() {
    expensesNameInput.value = '';
    expensesAmountInput.value = '';
}
function listDisplay(){
    const expenseItem = document.createElement('div');
    expenseItem.textContent = `Wydatek: ${nameOfExpense[i-1]} - Kwota: ${amountOfExpense[j-1]} zł`;
    expensesListContainer.appendChild(expenseItem);
}
//wywołanie funkcji wejscia 
welcome();
//ustawienie czasu po którym zniknie komunikat i pojawi się kalkulator
setTimeout(clearWelcome, 1000);
//dodanie event listenerów do przycisków do otwierania formularza do dodawania wydatków.
addExpenses.addEventListener('click', kindOfExpenses);
//zamykanie formularza do dodawania wydatków i pokazywanie kalkulatora
closeKindOfExpenses.addEventListener('click', () => {
    kindOfExpensesDIV.classList.remove('kind-of-expenses-container');
    calculator.classList.add('visable');
    expensesList.classList.remove('hidden');
});
addExpenseButton.addEventListener('click', () => {
addNameOfExpense();
addAmountOfExpense();

if(NameStatus && AmountStatus){
showMessage(`Dodano wydatek: ${nameOfExpense[i-1]} o kwocie ${amountOfExpense[j-1]} zł`, 'added');
alert(incomeValueOpperations);
clearExpenseInputs();
NameStatus = false;
AmountStatus = false;
listDisplay();
}
//alert(`Dodano wydatek: ${nameOfExpense[i-1]} o kwocie ${amountOfExpense[j-1]} zł`);
});

