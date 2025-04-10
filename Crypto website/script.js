var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "http://api.coinlayer.com/api/live?access_key=957aa81895ab6af4def5c74a3eb93318",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = Math.round(response.rates.BTC);
    eth.innerHTML = Math.round(response.rates.ETH);
    doge.innerHTML = response.rates.DOGE;
});