// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get a reference to the table body
var tbody = d3.select('tbody');

//console.log the weather data 
console.log(tableData)

//Loop through data and console.log each ufo report object
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
});

//Use d3 to append one table row 'tr' for each ufo report object
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
	var row= tbody.append("tr");
});

//Use Object.entries to console.log each ufo report value