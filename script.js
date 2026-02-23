const welcomeTEXT = document.querySelector('.welcome-text');
const welcomeDIV = document.querySelector('.welcome');
const calculator = document.querySelector('.calculator');
const kindOfExpensesDIV = document.querySelector('.kind-of-expenses');
const addExpenses = document.querySelector('#add-expense-menu');
const closeKindOfExpenses = document.querySelector('#close-kind-of-expenses');
const incomeInput = document.querySelector('#income');
const addingComm = document.querySelector('#adding-comm');
const expensesNameInput = document.querySelector('#expenses-name');
const expensesAmountInput = document.querySelector('#expenses-amount');
let nameOfExpense = [];
let amountOfExpense = [];
let i=0;
let j=0;
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
}
function clearAddingComm() {
    addingComm.classList.add('hidden');
}
function addingCommVisible() {
    addingComm.classList.remove('hidden');
}
//pokazanie formularza do dodawania wydatków
function kindOfExpenses() {
    const incomeValue = parseFloat(incomeInput.value);
    if (isNaN(incomeValue) || incomeValue <= 0) {
        addingCommVisible();
//todo: zmienic na diva z komunikatem o błędzie
       // alert('Proszę wprowadzić poprawny dochód przed dodaniem wydatków');
       addingComm.innerHTML = '<div class="not-added">Proszę wprowadzić poprawny dochód przed dodaniem wydatków</div>';
        setTimeout(clearAddingComm, 2000);
        return;
    }else{
//todo: dodac infrmacje o wejsciu 
        addingCommVisible();
    addingComm.innerHTML = '<div class="added">Możesz teraz dodać swoje wydatki</div>';
    kindOfExpensesDIV.classList.add('kind-of-expenses-container');
    calculator.classList.remove('visable');
setTimeout(clearAddingComm, 2000);}
    }
/* FIX!!!!!!!!!
function addNameOfExpense() {
    if (expensesNameInput.value.trim() === '') {
        addingCommVisible();
        addingComm.innerHTML = '<div class="not-added">Nazwa wydatku nie może być pusta</div>';
        setTimeout(clearAddingComm, 2000);
        return;
    }else{
        nameOfExpense[i]+= expensesNameInput.value.trim();
        i++;
    }
} */
/*  FIX!!!!!!!!!
function addAmountOfExpense() {
    if(isNaN(parseFloat(expensesAmountInput.value)) || parseFloat(expensesAmountInput.value) <= 0) {    
        addingCommVisible();
        addingComm.innerHTML = '<div class="not-added">Kwota wydatku musi być liczbą dodatnią</div>';
        setTimeout(clearAddingComm, 2000);
        return;
    }else{
        amountOfExpense[j]+= parseFloat(expensesAmountInput.value);
        j++;
    }
} */
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
});
