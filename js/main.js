'use strict';
let money;
let time;
function start() {
    money = +prompt('Укажите Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        +prompt('Укажите Ваш бюджет на месяц', '');
    }

}

// start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
                if (a != '' && typeof(a) != null && typeof(a) === 'string' && b != '' && typeof(b) != null) {
                    this.expenses[a] = b;          
                } else {
                    --i;
                }
        }
    },

    detectBudgetPerDay: function() {
        this.budgetPerDay = (appData.budget / 30).toFixed();
        alert('Ваш ежедневный бюджет: ' + this.budgetPerDay);
    },

    level: function() {
        if (this.budgetPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (2000 > this.budgetPerDay >= 100  ) {
            console.log('Средний уровень достатка');
        } else if (this.budgetPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('error');
        }
    },

    optionalExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Статья необязательных расходов?', '');
                if (a != '' && typeof(a) != null && typeof(a) === 'string') {
                    this.optionalExpenses[i] = a;          
                } else {
                    --i;
                }
        }
    },

    checkSavings: function () {
        if(this.savings) {
            let save = +prompt('Введите сумму накоплений', ''),
                percent = +prompt('Под какой процент?', '');
    
            this.monthIncome = save/100/12 * percent;
            alert('Доход в месяц с Вашего депозита составляет' + appData.monthIncome);
    
        }
    },

    chooseOptionalExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optionalExpense = prompt('Введите статью необязательных расходов', '');
            this.optionalExpenses[i] = optionalExpense;
        }
    },

    chooseIncomes: function() {
        let incomes = prompt('Перечислите через запятую Ваши дополнительные источники дохода', '');

        this.income = incomes.split(', ');
        this.income.push(prompt('Впишите дополнительный источник, если забыли', ''));
        this.income.sort();
    },


};

// appData.chooseIncomes();

// appData.chooseOptionalExpenses();
//внесение обязательных расходов   ======== функция перенесена в обьект как метод
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
// expenses();

//расчет бюджета на 1 день ============== перенесено в обьект как метод

// appData.budgetPerDay = appData.budget / 30;
// alert('Ваш ежедневный бюджет: ' + appData.budgetPerDay);

//характеристика уровня дохода   ============== перенесено в обьект как метод
// if (appData.budgetPerDay < 100) {
//     console.log('Минимальный уровень достатка');
// } else if (2000 > appData.budgetPerDay >= 100  ) {
//     console.log('Средний уровень достатка');
// } else if (appData.budgetPerDay >= 2000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('error');
// }

function optionalExpenses() { //====== перенесено в обьект как метод
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов?', '');
            if (a != '' && typeof(a) != null && typeof(a) === 'string') {
                appData.optionalExpenses[i] = a;          
            } else {
                --i;
            }
    }
}


function checkSavings() {
    if(appData.savings) {
        let save = +prompt('Введите сумму накоплений', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12 * percent;
        alert('Доход в месяц с Вашего депозита составляет' + appData.monthIncome);

    }
}
// checkSavings();
console.log(appData);

