// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------
var sports = ["basketball", "football", "swimming", "tennis", "soccer", "olympics", "boxing", "bowling", "rugby",
"curling", "track", "ice skating", "wrestling", "softball", "baseball", "golf", "volleyball"]

// create a variable "topic" and give the button the "data-topic" attribute defined in the HTML
var topic = $(this).attr("data-topic");

// 


// make a variable for the giphy API where the "topic" variable above is dropped into the query section 
// of the URL so we can use it for all of the buttons (and any new ones)
var queryURL = "https://api.giphy.com/v1/imgTags/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";


// create on.click event for the buttons in the HTML with the ID "buttons"
$("#buttons").on("click", function() {
    
    // create an .ajax request, defining the URL with the "queryURL" we created above and using the
    // GET method to attach to grab the data
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    // once we have the queryData data, use .then to do something else
    .then(function(queryData) {
        // make a variable for the queryData.data
        var results = queryData.data;

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


$(document.body).on("click", "button", function() {
    // for every iteration of the results variable,
    for (var i = 0; i < sports.length; i++) {
        // make a new button everytime the variable "button" is called in the code
        var makeButton = $("<button>");
        // append the queryData results to the new button
        makeButton.





    });
};


// need another function to make the buttons 







//   var topic = i.toString()

// // function to generate the URL each time it's needed rather than type it out
// var userSearch = function(topic) {
// var urlValue = "https://api.giphy.com/v1/imgTags/search?api_key=qYHkASPlrj1bvkwFNv1C7QfsCGAUcdGD&q=" + topic + "&limit=9&offset=0&rating=G&lang=en";
// };


// var searchTopic = function(topic) {
//     $.ajax({
//         url: urlValue
//         method: "GET"
//     }).then(function(data) {
//         // assign the ajax call function to the button
//         makeButton();
//         buttonClass.append.buttonTag;
//         console.log(data);
//     });
// };


// var makeButton = function() {
// // reference the HTML class "buttons" and create a new button element
// var buttonClass = $(".buttons");
// // make a button 
// var buttonTag = $("<button>").attr("name", topic);
// buttonClass.append(buttonTag);
// };

// // loop through all of the array and make a button for each topic.
// // include the API call info and assign the URL value to the button
// // whenever a button is clicked, it should show 9 thumbnails of imgTags
// // when a thumbnail is clicked, it should play the imgTag repeatedly
// // when it is clicked a second time, it should stop and/or return to the thumbnail image

// var buttonFunction = function() {
//     for (var i = 0; i < sports.length; i++) {
//         makeButton();
//     };
// };

// // call the form HTML elements with "search" ID
// var getUserSearch = function() {
//     var userQuery = $("#search");
//     // append the text results from the userQuery to the "sports" array
//     $(sports).append("#search")
//     // make a new button with this new query content
//     makeButton();
//     $("#search").val("");
// };


// // whenever that button is clicked, show 9 thumbnails of imgTags
// // when a thumbnail is clicked, it should play the imgTag repeatedly
// // when it is clicked a second time, it should stop and/or return to the thumbnail image