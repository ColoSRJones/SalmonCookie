console.log('Hello world');

var firstPike = {
	minCust : 23,
	maxCust : 65,
	avgCookie: 6.3,
	hourlyArray: [],
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCookieCount: function(){
		for (var i=0; i<14; i++){
		firstPike.hourlyArray[i] = Math.floor(this.randomCustomersPerHour()
	    * firstPike.avgCookie);
		}
	},
};

var seaTac = {

	minCust: 3,
	maxCust: 24,
	avgCookie: 1.2,
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCookieCount: function(){
		for (var i=0; i<14; i++){
		seaTac.hourlyArray[i] = Math.floor(this.randomCustomersPerHour()
	    * seaTac.avgCookie);
		}
	},
};

var seaCtr = {

	minCust: 11,
	maxCust: 38,
	avgCookie: 3.7,
	hourlyArray : [],
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
	dailyCookieCount: function(){
		for (var i=0; i<14; i++){
		seaCtr.hourlyArray[i] = Math.floor(this.randomCustomersPerHour()
	    * seaCtr.avgCookie);
		}
	},
};

var capitolHill = {

	minCust: 20,
	maxCust: 38,
	avgCookie: 2.3,
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCustomerCount: function(){
	for (var i=0; i<14; i++){
		this.customersPerHour.push(this.randomCustomersPerHour());
		}
	},
};

var alKi = {
	customersPerHour: [],
	minCust: 2,
	maxCust: 16,
	avgCookie: 4.6,
	randomCustomersPerHour: function(){
		return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
	},
	dailyCustomerCount: function(){
		for (var i=0; i<14; i++){
			this.customersPerHour.push(this.randomCustomersPerHour());
		}
	},
}
firstPike.dailyCookieCount()
console.log(firstPike)
alKi.dailyCustomerCount()
console.log(alKi)

