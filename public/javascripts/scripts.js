

//Array of API's to be randomised
var selectAPI = ["Wordpress", "GitHub", "Twitter", "MailJet"];

//randomise function
var pickANAPI = function () {
	//randomise between the 4 array items
	var chosenAPI = selectAPI[Math.floor(Math.random() * 4)];
	document.getElementById("APIString").textContent=chosenAPI;
};


//Array of priority components to be randomised
var selectPriority = ["Speed", "Design", "Functionality", "Cross-Platform Compatibility"];

//randomise function
var pickAPriority = function () {
	//randomise between the 4 array items
	var chosenPriority = selectPriority[Math.floor(Math.random() * 4)];
	document.getElementById("priorityString").textContent=chosenPriority;
};


