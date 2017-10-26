const request = require('request');
const bp = require('./bp.json');

module.exports = {
	btcPrice: function(channel) {
		request.get("https://api.bitfinex.com/v2/ticker/tBTCUSD", function(error, response, body){
			body = JSON.parse(body);
			channel.send("1 BTC = $"+body[2])
		});
	},

	beautifulPeople: function(channel) {
		var rnd = Math.floor(Math.random() * ((bp.length - 3) - 1)) + 1;
		channel.send(bp[rnd]);
		channel.send(bp[rnd + 1]);
		channel.send("<:aidan:372452533509029888>")
	}
}