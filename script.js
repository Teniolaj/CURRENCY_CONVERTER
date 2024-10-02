const currency_code = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
};


const dropdown = document.querySelectorAll("select");
const submitBtn = document.getElementById("submit");
const input = document.querySelector("input");
const fromCurrency = document.querySelector('select[name="fromCountry"]')
const toCurrency = document.querySelector('select[name="toCountry"]')
const currencyDisplay = document.getElementById('currency-display')
const startDate = document.getElementById("startDate")
const endDate = document.getElementById("endDate")
const chartBtn = document.getElementById("fetchData")
const ratesTableBody = document.getElementById("ratesTable").getElementsByTagName("tbody")[0];

const API_KEY = "69eff655652a013fcbcd9b92"


for (let i = 0; i < dropdown.length; i++){
    for (let country in currency_code){
        let selected;
        if(i == 0){
            selected = country == "USD" ? "selected" : "";
        }else if (i == 1){
            selected = country == "EUR" ? "selected" : "";
        }
        let newOptionTag = `<option value="${country}" ${selected}>${country}</option>`;
        dropdown[i].innerHTML += newOptionTag;
    }
    dropdown[i].addEventListener("change", e => {
        getCountryFlag(e.target)
    })
}

function getCountryFlag(element) {
    for(code in currency_code){
        if(code == element.value){
            let imageTag = element.parentNode.querySelector("img")
            imageTag.src = `https://flagsapi.com/${currency_code[code]}/flat/64.png`
        }
    }
}

chartBtn.addEventListener("click", () => {
    const startCurrency = fromCurrency.value
    const endCurrency = toCurrency.value
    createExchangeChart(startCurrency, endCurrency, startDate.value, endDate.value)
})

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
})

window.addEventListener("load", () => {
    getExchangeRate();
})

function getRandomCurrencies(currencyKeys, count) {
    const shuffled = currencyKeys.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getExchangeRate() {
    let inputValue = input.value;
    if(inputValue == "" || inputValue < 0){
        currencyDisplay.textContent = "please input a valid exchange rate"
        return;
    }
    const currency_API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}` 
    fetch(currency_API_URL).then(res => res.json()).then(result => {
        const currencyKeys = Object.keys(result.conversion_rates);
        const randomCurrencies = getRandomCurrencies(currencyKeys, 10);
        let conversions = result.conversion_rates
        let toValue = inputValue * conversions[toCurrency.value]
        let resultValue = `${inputValue} ${fromCurrency.value} = ${toValue.toFixed(2)} ${toCurrency.value}`
        currencyDisplay.textContent = resultValue;

        randomCurrencies.forEach(currency => {
            console.log("random currency")
            const rate = conversions[currency];
            const row = ratesTableBody.insertRow();
            const cellCurrency = row.insertCell(0);
            const cellUSD = row.insertCell(1);
            const cellRate = row.insertCell(1);
            cellUSD.textContent = "1.0000";
            cellRate.textContent = rate.toFixed(4);
            cellCurrency.textContent = currency;
            cellRate.textContent = rate;
        });
    })
}

function createExchangeChart(currency1, currency2, firstDate, lastDate) {
    const start = new Date(firstDate);
    const end = new Date(lastDate);
    let currentDate = new Date(start);
    const datesArray = [];
    const ratesArray = [];

    function fetchDataForDate(currentDate) {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const HISTORYDATES_API = `https://v6.exchangerate-api.com/v6/${API_KEY}/history/${currency1}/${year}/${month}/${day}`;


        fetch(HISTORYDATES_API)
            .then(response => {
                // console.log(`Raw response for ${year}-${month}-${day}:`, response);
                
                console.log(response.json());
            })
            .then(result => {
                console.log(`Result for ${year}-${month}-${day}:`, result);
                
                if (result && result.conversion_rates && result.conversion_rates[currency2]) {
                    datesArray.push(`${year}-${month}-${day}`);
                    ratesArray.push(result.conversion_rates[currency2]);
                } else {
                    console.error(`No data for ${year}-${month}-${day}`);
                }
            })
            .catch(err => {
                console.error(`Error fetching data for ${year}-${month}-${day}:`, err);
            });
    }

    function fetchAllData() {
        const promises = [];

        while (currentDate <= end) {
            promises.push(fetchDataForDate(new Date(currentDate)));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        Promise.all(promises).then(() => {
            console.log('Dates Array:', datesArray);
            console.log('Rates Array:', ratesArray);

            drawChart(datesArray, ratesArray, currency1, currency2);
        });
    }

    fetchAllData();
}

function drawChart(dates, rates, currency1, currency2) {
    const currencyGraph = document.getElementById('exchangeRateChart').getContext('2d');
    new Chart(currencyGraph, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: `${currency1} to ${currency2} Exchange Rate`,
                data: rates,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Exchange Rate'
                    }
                }
            }
        }
    });
}

