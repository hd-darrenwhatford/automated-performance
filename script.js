// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCA_mM9FFLpxGzZrAWoV3ckC7LPqDrmLzg",
	authDomain: "automated-performance.firebaseapp.com",
	databaseURL: "https://automated-performance.firebaseio.com",
	projectId: "automated-performance",
	storageBucket: "automated-performance.appspot.com",
	messagingSenderId: "391320435503",
	appId: "1:391320435503:web:6241d51d37c2f51dce7fda",
	measurementId: "G-2SCLJLN567"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database
var ref = firebase.database().ref('/'); 
console.log(ref);

var dbVal = document.getElementById("dbVal");

ref.on('value', function(snapshot) {
	var value = snapshot.val();
	console.log(value);

	// Create an empty array to store values from Firebase
	var data = [];

	// Loop through the data in the database
	snapshot.forEach(function(childNodes) {
		// Get each value from each node in the console e.g. Dan, 2
		console.log(childNodes.val());

		data.push(childNodes.val());
	});

	console.log(data);

	// Create the chart from data passed into the data array
	// https://bost.ocks.org/mike/bar/
	d3.select(".chart")
		.selectAll("div")
		.data(data)
		.enter()
		.append("div")
		//.style("width", function(d) { return d + "px"; }).text(function(d) { return d; });
		// Set the width of each new bar as a multiple of the associated data value, d
		//.style("width", function(d) { return d * 10 + "px"; })
		.style("width", function(d) { return d + "%"; })
		// Set the text content of each bar and produce a label
		.text(function(d) { return d; });		
});

	/*
	// On any "value event" pass a snapshot of the database to the callback function                          
	ref.on('value', function(snapshot) {
		// Console log the snapshot of the database
		console.log(snapshot.val());
		// Stringify the JSON document and output the data to the HTML document
		output.innerHTML = JSON.stringify(snapshot.val(), null, 2);

		// Loop through the data in the database
		snapshot.forEach(function(childNodes) {
			// Output the value in the console
			console.log(childNodes.val());
			// Output the value onto the page
			dbVal.innerHTML = childNodes.val();

			// This outputs the 'test3' database value
			var performanceVal = childNodes.val().test3;	// 2
			console.log(performanceVal);

			//d3.select("body").style("background-color", "cyan");
			var data = [30, 6, 168, 281, 303, 365];

			data.push(performanceVal);

			// https://www.dashingd3js.com/using-json-to-simplify-code
			d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) { return d + "px"; }).text(function(d) { return d; });
		});
	});
	*/

	// Add a value to the database but this overwrites what has gone before
	/*
	ref.set({
		"test2": "Dan"
	});
	*/

	// Add additional value to the database using the update method
	/*
	ref.update({
		"test3": 2
	});
	*/

	/*
//d3.select("body").style("background-color", "cyan");
var data = [30, 6, 168, 281, 303, 365];

// https://www.dashingd3js.com/using-json-to-simplify-code
d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) { return d + "px"; }).text(function(d) { return d; });
*/