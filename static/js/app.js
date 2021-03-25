// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get a reference to the table body
var tbody = d3.select('tbody');

//console.log the weather data 
console.log(tableData)

//Step 1:
//Loop through data and console.log each ufoSightings object
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
});

// Step 2:
//Use d3 to append one table row 'tr' for each ufoSightings object
// tableData.forEach(function(ufoSightings) {
// 	console.log(ufoSightings);
// 	var row= tbody.append("tr");
// });

// Step 3:
//Use Object.entries to console.log each ufoSightings value
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
	var row =tbody.append("tr");

//k is short for key & v is short for value 
Object.entries(ufoSightings).forEach(function([k,v]) {
	console.log(k,v);
	});
});

// Step 4:
//Use d3 to append 1 cell per ufoSightings value
tableData.forEach(function(ufoSightings) {
	console.log(ufoSightings);
	var row =tbody.append("tr");
	Object.entries(ufoSightings).forEach(function([k,v]) {
	console.log(k,v);
	var cell=row.append("td");
	cell.text(v);
	});
});

//Step 5:
//Select the button 
var button = d3. select("button");





