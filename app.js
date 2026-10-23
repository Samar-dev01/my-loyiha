class Currensy {
    #code;
    #rate;

    constructor(code, rate) {
        this.#code = code;
        this.#rate = rate;
    }

    get code() {
     return this.#code;   
    }

    get rate() {
        return this.#rate;
    }

    display (container) {
        const tr = document.createElement('tr');
        tr.innerHTML=`
        <td>${this.code}</td>
        <td>${this.rate}</td>
        `;
        container.appendChild(tr);
    }
}

class CurrensyConverter {
    #currencies;

    constructor(currencies) {
        this.#currencies = currencies;
        this.#populateSelect('select-1');
        this.#populateSelect('select-2');
        document.getElementById('convert').addEventListener('click', this.#convert);
    }

    #populateSelect(selectId) {
        const selectElement = document.getElementById(selectId);
        this.#currencies.forEach(currensy => {
            const option = document.createElement('option');
            option.value = currensy.rate;
            option.label = currensy.code;
            selectElement.appendChild(option);
        })
    }

    #convert() {
        const fromCurrency = document.getElementById('select-1').value;
        const input = parseFloat(document.getElementById('input').value);
        const toCurrency = document.getElementById('select-2').value;
        const result = input * toCurrency / fromCurrency;
        document.getElementById('result').textContent = `Result: ${result}`;
    }
}


class App {
    #list;
    #currencies;

    constructor() {
       this.#init();  
    }

    async #init() {
        this.#list = document.getElementById('table-body');
        console.log(this.#list);
        const response = await fetch('https://api.frankfurter.dev/v1/latest?base=USD');
        const result = await response.json();
        this.#transformResult(result);
        this.#renderCurrencies();
        this.#renderConverter();
        
    }

    #transformResult(result) {
        const {base, amount, rates} = result;
        
        const baseCurrency = new Currensy(base, amount);
        const otherCurrency = Object.entries(rates).map(([code, rate])=>new Currensy(code, rate));
        this.#currencies = [baseCurrency, ...otherCurrency];
        console.log(this.#currencies);
    }

    #renderCurrencies() {
        this.#currencies.forEach(currensy => currensy.display(this.#list));
    }

    #renderConverter() {
        new CurrensyConverter(this.#currencies);
    }
}

new App();  