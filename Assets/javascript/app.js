// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------
// starting array (these should be made into buttons on the HTML page at document.ready)
var topics = ["basketball", "football", "swimming", "tennis", "soccer", "olympics", "boxing", "bowling", "rugby",
"curling", "track", "ice skating", "wrestling", "softball", "baseball", "golf", "volleyball"]



// // make a variable for the giphy API where the "sportTopic" variable above is dropped into the URL query section 
// var queryURL = "https://api.giphy.com/v1/imgTags/search?q=" + sportTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

// PUSH USER INPUTS TO THE "topics" ARRAY AND MAKE BUTTONS-------------------------------------------------
$(document.body).on("click", "#submit", function(event) {
    // $("#submit").on("click", "button", function(event) {
    // prevent the browser default from happening so we can control how the event is handled
    event.preventDefault();
        // This line will grab the text from the input box
        var userSearch = $("#search").val().trim();
        // The user's topic from the textbox is then added to the "topics" array
        topics.push(userSearch);
        // create a variable "sportTopic" and give the button the "data-name" attribute defined in the HTML
        var sportTopic = $(this).attr("data-name");

        createButtons();
      });


// CREATE BUTTONS AND ADD TEXT TAHT CORRESPONDS WITH THE TEXT IN THE ARRAY -------------------------------------
function createButtons() {
    $("#buttons").empty();
    // loop through all of the array and make a button for each sportTopic.
    for (var i = 0; i < topics.length; i++) {
        // make a new button everytime the variable "button" is called in the code
        var newButton = $("<button>");
        // Add ID
        newButton.attr("id", topics[i]);
        // Add data-attribute with a value of the movie at index i
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        // Add the button to the DOM, appending to HTML element with "buttons" ID
        $("#buttons").append(newButton);
    }
};

// Run the function to generate buttons based on the initial "topics" array
createButtons();


// ASSIGN THE GIPHY SEARCH RESULTS TO EACH BUTTON --------------------------------------------------------------
// create on.click event for the buttons in the HTML with the ID "buttons"
$("#buttons").on("click", "button", function() {
    $("#populatedGifs").empty();

    // create a variable "dataTopic" and give the button the "data-topic" attribute defined in the HTML
    var dataTopic = $(this).attr("data-name");

    // make variable to use in place of full URL throughout code
    // also, whenever a button is clicked, it should show 10 thumbnails of imgTags (the "limit=10" in the URL does this)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dataTopic + "&apiKey=qYHkASPlrj1bvkwFNv1C7QfsCGAUcdGD&limit=10";
    
    // create an .ajax request, 
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
            // append the new div tag to the HTML ID "imgTagt-appear-here"
            $("#populatedGifs").append(newDiv);
        }
        
    });
});