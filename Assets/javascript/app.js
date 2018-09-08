// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------
// starting array (these should be made into buttons on the HTML page at document.ready)
var sports = ["basketball", "football", "swimming", "tennis", "soccer", "olympics", "boxing", "bowling", "rugby",
"curling", "track", "ice skating", "wrestling", "softball", "baseball", "golf", "volleyball"]



// // make a variable for the giphy API where the "sportTopic" variable above is dropped into the URL query section 
// var queryURL = "https://api.giphy.com/v1/imgTags/search?q=" + sportTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

// PUSH USER INPUTS TO THE "SPORTS" ARRAY AND MAKE BUTTONS-------------------------------------------------
$(document.body).on("click", "button", function(event) {

    // prevent the browser default from happening so we can control how the event is handled
    event.preventDefault();
        // This line will grab the text from the input box
        var userSearch = $("#search").val().trim();
        // The movie from the textbox is then added to our array
        sports.push(userSearch);
        // create a variable "sportTopic" and give the button the "data-topic" attribute defined in the HTML
        var sportTopic = $(this).attr("data-name");

        // calling renderButtons which handles the processing of our movie array
        // createButtons();
      });


// Function for displaying buttons with 'sports' names
function createButtons() {
    $("#buttons").empty();
    // loop through all of the array and make a button for each sportTopic.
    for (var i = 0; i < sports.length; i++) {
        // make a new button everytime the variable "button" is called in the code
        var newButton = $("<button>");
        // Add ID
        newButton.attr("id", sports[i]);
        // Add data-attribute with a value of the movie at index i
        newButton.attr("data-name", sports[i]);
        newButton.text(sports[i]);
        // Add the button to the DOM, appending to HTML element with "buttons" ID
        $("#buttons").append(newButton);
    }
};
 createButtons();

// create on.click event for the buttons in the HTML with the ID "buttons"
$("#buttons").on("click", "button", function() {
    // create a variable "dataTopic" and give the button the "data-topic" attribute defined in the HTML
    var dataTopic = $(this).attr("data-name");
    // create an .ajax request, 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dataTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        // include the API call info and assign the URL value to the button
        url: queryURL,
        // use the GET method to attach to grab the data
        method: "GET"
    })
    
    // once we have the response data, use .then to do something else
    .then(function(response) {
        // make a variable to call in future code instead of typing response.data every time
        var results = response.data;

        // for every iteration of the results variable,
        for (var i = 0; i < results.length; i++) {
            // create a new div tag using the "newDiv" variable
            var newDiv = $("<div>");
            // create a new img tag using the "imgTag" variable
            var imgTag = $("<img>");
            // give the new img tag the src image from the results
            imgTag.attr("src", results[i].images.fixed_height.url);
            // prepend the new img tag to the new div tag
            newDiv.prepend(imgTag);
            // prepend the new div tag to the HTML ID "imgTagt-appear-here"
            $("#populatedGifs").prepend(newDiv);
        }
    });
});


// whenever a button is clicked, it should show 9 thumbnails of imgTags
// when a thumbnail is clicked, it should play the imgTag repeatedly
// when it is clicked a second time, it should stop and/or return to the thumbnail image


// // whenever that button is clicked, show 9 thumbnails of imgTags
// // when a thumbnail is clicked, it should play the imgTag repeatedly
// // when it is clicked a second time, it should stop and/or return to the thumbnail image