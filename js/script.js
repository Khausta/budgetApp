'use strict';

let money = +prompt('Укажите Ваш бюджет на месяц', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: '',
    savings: false,
};

//внесение обязательных расходов
function expenses() {
    let i = 0;
    do {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        if (a != '' && a != null  ) {
            let b = +prompt('Во сколько обойдется?', '');
            if (b != '' && b != null && isNaN(b) == false) {
                appData.expenses[a] = b;
                i++;
            }  else {
                do {
                    b = +prompt('Во сколько обойдется?', '');
                } while (b != '' && b != null && isNaN(b) == false);
            }
        }       
    } while (i < 2);
}
expenses();


//расчет бюджета на 1 день
function oneDayBudget () {
    let oneDay = appData.budget / 30;
    return oneDay;
}

alert(oneDayBudget ());

console.log(appData);