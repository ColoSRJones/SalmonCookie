//Object Literals - Random Customer for Min to Max
var firstPike = {
	minCust : 23,
	maxCust : 65,
	avgCookie: 6.3,
	hourlyArray: [],
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
// For generating number of cookies per hour based on customer averages
dailyCookieCount: function(){
		for (var i=0; i<14; i++){
		firstPike.hourlyArray[i] = Math.floor(this.randomCustomersPerHour()
	    * firstPike.avgCookie);
		}
	},
};

var seaTac = {
	hourlyArray: [],
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
	hourlyArray: [],
	minCust: 20,
	maxCust: 38,
	avgCookie: 2.3,
	randomCustomersPerHour: function(){
	return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
},
dailyCookieCount: function(){
		for (var i=0; i<14; i++){
		capitolHill.hourlyArray[i] = Math.floor(this.randomCustomersPerHour()
	    * capitolHill.avgCookie);
		}
	},
};

var alKi = {
	hourlyArray: [],
	minCust: 2,
	maxCust: 16,
	avgCookie: 4.6,
	randomCustomersPerHour: function(){
		return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
	},
	dailyCookieCount: function(){
		for (var i=0; i<14; i++){
		alKi.hourlyArray[i] = Math.floor(this.randomCustomersPerHour()
	    * alKi.avgCookie);
		}
	},
}
firstPike.dailyCookieCount()
console.log(firstPike)
alKi.dailyCookieCount()
console.log(alKi)

