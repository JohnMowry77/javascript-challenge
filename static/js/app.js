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
//Select the button and the form
var button = d3.select("#filter-btn");

var form =d3.select("#datetime");

//Step 6:
//Create event handlers
button.on("click", runEnter);

form.on("submit", runEnter);

//Step 7:
//Complete the event handeler function for the form
function runEnter() {
	// Prevent the page from refreshing
	d3.event.preventDefault();

	//Select the input element and get the raw html node
	var ufoElement =d3.select("#datetime");
	//get the value property of the ie (input element)
	var valueProp =ufoElement.property("value");

	// console.log(valueProp);
	// console.log(tableData);

var filteredData= tableData.filter(ufoDate=> ufoDate.datetime === valueProp);
// console.log(filteredData);

//Step 8:
//Then select the unordered list element by class name
var table= d3.select('tbody');

// remove any children from the list to
table.html("");

filteredData.forEach((ufoSightings)=> {
	console.log(ufoSightings);
	var row =tbody.append("tr");
	Object.entries(ufoSightings).forEach(([k,v])=> {
	var cell=row.append("td");
	cell.text(v);
	});
});


};

