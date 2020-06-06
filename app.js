var indoex = require('./lib/IndoEx');

// Trading Pairs
/*
indoex.getPairs(function (res) {
    console.log(res);
});

// Market Details
 indoex.getMarketlist(function (res) {
     console.log(res);
 });


// Tickers for all the supported trading pairs
 indoex.getTickers(function (res) {
     console.log(res);
 });

// get selected combination information
 indoex.getTicker('eth_btc',function (res) {
     console.log(res);
 });


// Depth of pair
 indoex.orderBook('etc_btc',function (res) {
     console.log(res);
 });



// Place order buy
//currencyPair, rate, amount, cp
 indoex.buy('eth_btc','0.001','0.876',function (res) {
     console.log(res);
 });

 //currencyPair, rate, amount, cp
  indoex.sell('eth_btc','0.001','0.876',function (res) {
     console.log(res);
 });

// Trade History
 indoex.tradeHistory('eth_btc',function (res) {
     console.log(res);
 });


// Get my trades
 indoex.myTradeHistory(function (res) {
     console.log(res);
 });
 

// Get account fund balances
indoex.getBalances(function (res) {
     console.log(res);
 }); 


// get deposit address
 indoex.depositAddress('btc',function (res) {
     console.log(res);
 });

//Get my open order list
 indoex.myOpenOrders( function (res) {
     console.log(res);
 });


// Get my order status of single order
indoex.getOrder('543', function (res) {
     console.log(res);
});



// Cancel order
 indoex.cancelOrder('543', function (res) {
     console.log(res);
 });



indoex.cancelOrderofCombination('BTC_ETH', function (res) {
     console.log(res);
 });

// Cancel all orders
 indoex.cancelAllOrders(function (res) {
     console.log(res);
 });


 indoex.tradeFee(function (res) {
     console.log(res);
 });

indoex.myDeposits(function (res) {
     console.log(res);
 });
*/ 
 indoex.mySelectedDeposits('BTC',function (res) {
     console.log(res);
 });