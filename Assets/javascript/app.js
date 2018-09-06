// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------
var sports = ["basketball", "football", "swimming", "tennis", "soccer", "olympics", "boxing", "bowling", "rugby",
"curling", "track & field", "ice skating", "wrestling", "softball", "baseball", "golf", "volleyball"]

var topic = i.toString()

var searchGiphy = function(topic) {
var urlValue = "https://api.giphy.com/v1/gifs/search?api_key=qYHkASPlrj1bvkwFNv1C7QfsCGAUcdGD&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
$.ajax({
url: urlValue;
method: "GET";
}).then(function(data) {
// assign the ajax call function to the button
makeButton();
buttonClass.append.buttonTag;
console.log(data);
});
};


var makeButton = function() {
// reference the HTML class "buttons" and create a new button element
var buttonClass = $(".buttons");
// make a button 
var buttonTag = $("<button>").attr("name", topic);
buttonClass.append(buttonTag);
};

$(document).ready()
// loop through all of the array and make a button for each topic.
// include the API call info and assign the URL value to the button
// whenever a button is clicked, it should show 9 thumbnails of gifs
// when a thumbnail is clicked, it should play the gif repeatedly
// when it is clicked a second time, it should stop and/or return to the thumbnail image

var buttonFunction = function() {
    for (var i = 0; i < sports.length; i++) {
        makeButton();
    };
};

// call the form HTML elements with "search" ID
// make a new button and append it to the HTML div element with the class "buttons"
var makeUserButton = function() {
    var submitButton = $("#submit");


// whenever that button is clicked, show 9 thumbnails of gifs
// when a thumbnail is clicked, it should play the gif repeatedly
// when it is clicked a second time, it should stop and/or return to the thumbnail image