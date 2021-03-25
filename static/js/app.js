// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get a reference to the table body
var tbody = d3.select('tbody');

//console.log the weather data 
console.log(tableData)

//Loop through data and console.log each ufoSightings object
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
});

//Use d3 to append one table row 'tr' for each ufoSightings object
// tableData.forEach(function(ufoSightings) {
// 	console.log(ufoSightings);
// 	var row= tbody.append("tr");
// });

//Use Object.entries to console.log each ufoSightings value
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
	var row =tbody.append("tr");

//create a dict
Object.entries(ufoSightings).forEach(function([k,v]) {
	console.log(k,v);
	});
});

//Use d3 to append 1 cell per ufoSightings value
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
	var row =tbody.append("tr");
	Object.entries(ufoSightings).forEach(function([k,v]) {
	console.log(k,v);
	var cell=row.append("td");
	});
});
