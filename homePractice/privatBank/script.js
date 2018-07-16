const privatBank = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';


fetch(privatBank)
    .then(success => {
        if (success.ok) {
            return success.json()
        }

    })
    .then(el => el)
    .then(el => tableMonney(el))
    .then(el => console.log(el));

const body = document.querySelector('body');
function tableMonney(arr) {
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const baseCyy = document.createElement('tr');
    const buy = document.createElement('tr');
    const sale = document.createElement('tr');

    for (let el of arr){

        const th = document.createElement('th');
        const td = document.createElement('td');
        const tdBuy = document.createElement('td');
        const tdSale = document.createElement('td');
        th.textContent = el.ccy;
        td.textContent = el.base_ccy;
        tdBuy.textContent = el.buy;
        tdSale.textContent = el.sale;

        // console.log(el.ccy);
        baseCyy.append(td);
        tr.append(th);
        buy.append(tdBuy)
        sale.append(tdSale);
        table.append(baseCyy);
        table.append(buy);
        table.append(sale);
        table.append(tr);

    }
    body.append(table);

}


// const table = document.createElement('table');
//
// const tr = document.createElement('tr');
// const th = document.createElement('th');
// const td = document.createElement('td');
// th.textContent = 'el.ccy';
// // console.log(el.ccy);
// table.append(tr)
// tr.append(th)
// tr.append(td)
// body.append(table);