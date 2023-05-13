'use strict';

let money = +prompt('Укажите Ваш бюджет на месяц', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

//внесение обязательных расходов
function expenses() {
    //==============================
    //1 вар цикла
    // let i = 0;
    // do {
    //     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    //         b = +prompt('Во сколько обойдется?', '');
    //         i++;
    //     if (a != '' && typeof(a) != null && b != '' && typeof(b) != null && isNaN(b) == false ) {
    //         appData.expenses[a] = b;      
    //     } else {
    //         i--;
    //     }      
    // } while (i < 2);
    //===============================
    //2 вар цикла
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');
            if (a != '' && typeof(a) != null && typeof(a) === 'string' && b != '' && typeof(b) != null) {
                appData.expenses[a] = b;          
            } else {
                --i;
            }
    }
}
expenses();

//расчет бюджета на 1 день
appData.budgetPerDay = appData.budget / 30;
alert('Ваш ежедневный бюджет: ' + appData.budgetPerDay);

//характеристика уровня дохода
if (appData.budgetPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (2000 > appData.budgetPerDay >= 100  ) {
    console.log('Средний уровень достатка');
} else if (appData.budgetPerDay >= 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('error');
}

function optionalExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов?', '');
            if (a != '' && typeof(a) != null && typeof(a) === 'string') {
                appData.optionalExpenses[i] = a;          
            } else {
                --i;
            }
    }
}

optionalExpenses();


console.log(appData);

