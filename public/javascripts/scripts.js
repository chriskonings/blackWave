

//Array of API's to be randomised
var selectAPI = ["Wordpress", "Javsacript Only", "Responsive", "Prioritise Speed"];

//randomise function
var pickANAPI = function () {
	//randomise between the 4 array items
	var chosenAPI = selectAPI[Math.floor(Math.random() * 4)];
	

	$("#hello span").text(function(index, text) {
		alert(chosenAPI);
		return text.replace('British Pound', 'GBP');
	});
};


//Array of priority components to be randomised
var selectPriority = ["Speed", "Design", "Functionality", "Cross-Platform Compatibility"];

//randomise function
var pickAPriority = function () {
	//randomise between the 4 array items
	var chosenPriority = selectPriority[Math.floor(Math.random() * 4)];
	alert(chosenPriority);
};


