const request = require('request');
const bp = require('./bp.json');

module.exports = {
	btcPrice: function(channel) {
		request.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/", function(error, response, body){
			body = JSON.parse(body);
			channel.send("1 BTC = $"+body[0].price_usd)
		});
	},

	beautifulPeople: function(channel) {
		var rnd = Math.floor(Math.random() * ((bp.length - 3) - 1)) + 1;
		channel.send(bp[rnd]);
		channel.send(bp[rnd + 1]);
		channel.send("<:aidan:372452533509029888>")
	},

	ethPrice: function(channel) {
		request.get("https://api.coinmarketcap.com/v1/ticker/ethereum/", function(error, response, body){
			body = JSON.parse(body);
			channel.send("1 ETH = $"+body[0].price_usd)
		});
	},

	cryptoPrice: function(channel){
		request.get("https://api.coinmarketcap.com/v1/ticker/?limit=10", function(error, response, body){
			body = JSON.parse(body);
			var currencies = "";
			for(var i = 0; i < 5; i++){
				currencies+="1 "+body[i].symbol+ " = $"+body[i].price_usd+"\n"
			}
			channel.send(currencies);
			currencies = "";
			for(var i = 5; i < 10; i++){
				currencies+="1 "+body[i].symbol+ " = $"+body[i].price_usd+"\n"
			}
			channel.send(currencies)
		});
	}
}