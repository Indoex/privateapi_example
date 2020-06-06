var request = require('request');
var crypto = require('crypto');
var querystring = require('querystring');
// add your key and secret
const ACCESSKEY  = 'yourpublickey';
const SECRET  = 'yoursecretkey';


const API_QUERY_URL = 'https://api.indoex.io/';
const PAIRS_URL = 'getavailablepairs';
const MARKETLIST_URL = 'getCompleteMarkets';
const TICKERS_URL = 'getCompleteMarkets';
const TICKER_URL = 'getSelectedMarket';
const ORDERBOOK_URL = 'depth';
const TRADEHISTORY_URL = 'trades';
const BALANCE_URL = 'mybalances';
const DEPOSITADDRESS_URL = 'generateaddess';
const MYOPENORDERS_URL = 'myOpenOrders';
const MYTRADEHISTORY_URL = 'myTradeHistory';
const ADD_ORDER_URL = 'addorder';
const GETORDER_URL = 'OrderInfo';
const CANCELSELECTEDORDER_URL = 'cancelOrder';
const CANCELCOMBINATIONORDERS_URL = 'cancelOrderCombination';
const CANCELALLORDERS_URL = 'cancelallOrders';
const TradeFee_URL = 'tradefee';
const DEPOSIT_URL = 'myDeposits';

const USER_AGENT = '';

function Request (params,cp){
    //console.log(params);
    request(params, function(error, response, body) {
        if(error) {
            cp(error);
        }else{
            cp(body);
        }
    });
}
function getSign(str) {
    let unescapeStr = querystring.unescape(str);
    return crypto.createHmac('sha512', SECRET).update(unescapeStr).digest('hex').toString();
}

var indoex = {

    getPairs: function(cp) {
        Request({method: 'GET', url: API_QUERY_URL + PAIRS_URL, headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    getMarketinfo:function(cp) {
        Request({method: 'GET', url: API_QUERY_URL + MARKETINFO_URL, headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    getMarketlist:function (cp) {
        Request({method: 'GET', url: API_QUERY_URL + MARKETLIST_URL, headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    getTickers:function (cp) {
        Request({method: 'GET', url: API_QUERY_URL + TICKERS_URL, headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    getTicker:function (param,cp) {
        Request({method: 'GET', url: API_QUERY_URL + TICKER_URL + '/'+ param.toUpperCase(), headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    orderBook:function (param,cp) {
        Request({method: 'GET', url: API_QUERY_URL + ORDERBOOK_URL+  '/'+ param.toUpperCase(), headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    tradeHistory:function (param,cp) {
         Request({method: 'GET', url: API_QUERY_URL + TRADEHISTORY_URL+  '/'+ param.toUpperCase(), headers: { 'User-Agent' : USER_AGENT } },cp);
    },
    tradeFee:function (cp) {
         Request({method: 'GET', url: API_QUERY_URL + TradeFee_URL, headers: { 'User-Agent' : USER_AGENT } },cp);
    },

    getBalances:function (cp) {
        let form = {};
        let header = {};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + BALANCE_URL, headers: header, form:form },cp);
    },

    depositAddress:function (currency, cp) {
        let form = {'currency':currency.toUpperCase()};
        let header = {};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        console.log(header);
        console.log(querystring.stringify(form));
        console.log(API_QUERY_URL + DEPOSITADDRESS_URL);
        Request({method: 'POST', url: API_QUERY_URL + DEPOSITADDRESS_URL, headers: header, form:form },cp);
    },

    
    buy:function (currencyPair, rate, amount, cp) {
        let form = {'currencyPair':currencyPair.toUpperCase(),'rate':rate,'amount':amount,'type':'BUY ORDER'};
        let header = {};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + ADD_ORDER_URL, headers: header, form:form },cp);
    },

    sell:function (currencyPair, rate, amount, cp) {
        let form = {'currencyPair':currencyPair.toUpperCase(),'rate':rate,'amount':amount,'type':'SELL ORDER'};
        let header = {};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + ADD_ORDER_URL, headers: header, form:form },cp);
    },

    cancelOrder:function (orderNumber,  cp) {
        let form = {'orderNumber':orderNumber};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + CANCELSELECTEDORDER_URL, headers: header, form:form },cp);
    },
    cancelOrderofCombination:function (currencyPair , cp) {
        let form = {'currencyPair':currencyPair.toUpperCase()};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + CANCELCOMBINATIONORDERS_URL, headers: header, form:form },cp);
    },

    cancelAllOrders:function (cp) {
        let form = {};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + CANCELALLORDERS_URL, headers: header, form:form },cp);
    },

    getOrder:function (orderNumber,  cp) {
        let form = {'orderNumber':orderNumber};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + GETORDER_URL, headers: header, form:form },cp);
    },

    myOpenOrders:function ( cp) {
        let form = {};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + MYOPENORDERS_URL, headers: header, form:form },cp);
    },

    myTradeHistory:function (cp) {
        let form = {};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + MYTRADEHISTORY_URL, headers: header, form:form },cp);
    },
    myDeposits:function (cp) {
        let form = {};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + DEPOSIT_URL, headers: header, form:form },cp);
    },
    mySelectedDeposits:function (vendor,cp) {
        let form = {'vendor':vendor};
        let header = {'Content-Type':'application/x-www-form-urlencoded'};
        header.ACCESSKEY = ACCESSKEY;
        header.SIGN = getSign(querystring.stringify(form));
        Request({method: 'POST', url: API_QUERY_URL + DEPOSIT_URL, headers: header, form:form },cp);
    },
};


module.exports = indoex;
