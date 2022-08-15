//constants and lets to be used to fetch data
const usdcnyel= document.querySelector('.usdcny');
const usdinrel=document.querySelector('.usdinr');
const cnyinrel=document.querySelector('.cnyinr');
let exRate;

//api to fetch currency rate for USD/CNY
const currencyapiUSDCNY={
  key:'UbZUvrfPvrKBxJT6KEm7Z6KOsOdj54Qr',
  baseurl:'https://api.apilayer.com/currency_data/convert?from=USD&to=CNY&amount=1',
  //function to pass the url dynamically
  getexchangeRateUSDCNY : function(){
    return `${this.baseurl}&apikey=${this.key}`;
  },
};
async function exchangeRateDisplayUSDCNY(){
 const res= await fetch(currencyapiUSDCNY.getexchangeRateUSDCNY());
 const data= await res.json();
 console.log(data.result);
 return data.result;
}
exchangeRateDisplayUSDCNY();
 async function renderExchangeRateUSDCNY(){
  exRate= await exchangeRateDisplayUSDCNY();
  console.log('ex',exRate);
  usdcnyel.innerHTML=`<h1> ${exRate} </h1>`;
}

//api to fetch currency rate for USD/INR
const currencyapiUSDINR={
  key:'UbZUvrfPvrKBxJT6KEm7Z6KOsOdj54Qr',
  baseurl:'https://api.apilayer.com/currency_data/convert?from=USD&to=INR&amount=1',
  //function to pass the url dynamically
  getexchangeRateUSDINR : function(){
    return `${this.baseurl}&apikey=${this.key}`;
  },
};
async function exchangeRateDisplayUSDINR(){
 const res= await fetch(currencyapiUSDINR.getexchangeRateUSDINR());
 const data= await res.json();
 console.log(data.result);
 return data.result;
}
exchangeRateDisplayUSDINR();
 async function renderExchangeRateUSDINR(){
  exRate= await exchangeRateDisplayUSDINR();
  console.log('ex',exRate);
  usdinrel.innerHTML=`<h1> ${exRate} </h1>`;
}

//api to fetch currency rate for CNY/INR
const currencyapiCNYINR={
  key:'UbZUvrfPvrKBxJT6KEm7Z6KOsOdj54Qr',
  baseurl:'https://api.apilayer.com/currency_data/convert?from=CNY&to=INR&amount=1',
  //function to pass the url dynamically
  getexchangeRateCNYINR : function(){
    return `${this.baseurl}&apikey=${this.key}`;
  },
};
async function exchangeRateDisplayCNYINR(){
 const res= await fetch(currencyapiCNYINR.getexchangeRateCNYINR());
 const data= await res.json();
 console.log(data.result);
 return data.result;
}
exchangeRateDisplayCNYINR();
 async function renderExchangeRateCNYINR(){
  exRate= await exchangeRateDisplayCNYINR();
  console.log('ex',exRate);
  cnyinrel.innerHTML=`<h1> ${exRate} </h1>`;
}

//initializing function
async function init(){
//rendering the exchange rate and displaying on the UI;
renderExchangeRateUSDCNY();
renderExchangeRateUSDINR();
renderExchangeRateCNYINR();
}
init();
