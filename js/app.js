console.log('Hello world');

var firstPike = {
	minCust : 23,
	maxCust : 65,
	avgCookie: 6.3,
randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCustomerCount: function(){
	for (var i=0; i<14; i++){
		this.customersPerHour.push(this.randomCustomersPerHour());
	}
	},
}

var seaTac = {

	minCust: 3,
	maxCust: 24,
	avgCookie: 1.2,
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCustomerCount: function(){
	for (var i=0; i<14; i++){
		this.customersPerHour.push(this.randomCustomersPerHour());
	}
	},
}

var seaCtr = {

	minCust: 11,
	maxCust: 38,
	avgCookie: 3.7,
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCustomerCount: function(){
	for (var i=0; i<14; i++){
		this.customersPerHour.push(this.randomCustomersPerHour());
	}
	},
}

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
}

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
alKi.dailyCustomerCount()
console.log(alKi)
alKi.dailyCustomerCount()
console.log(alKi)

