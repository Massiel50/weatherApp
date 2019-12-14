
$(document).ready(function(){
    // api.openweathermap.org/data/2.5/weather?q={searchCity name}
    const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
    const weatherAPIKey = "3be2b2b6acc21e3760901d15acf91f72";
    // My API key that does not work "1177fbd51295e22fa6e70b5d7b978a5c";

   

    // uses searched city name to get city climate data
    function currentweather(searchCity){
        $.ajax({
            url: weatherAPI + searchCity + "&units=imperial&appid=" + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".today").append("<h2>" + response.name + " Weather details </h2>" + "<p>Temperature: " + response.main.temp + "</p>");
            $(".today").append("<p>Wind Speed: " + response.wind.speed + "</p>");
            getUV(response.coord.lat, response.coord.lon)
        });
    }
    // grabs forcast data from api
    function getForeCast (searchCity){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&appid=" + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);
 
            for (var i = 1; i <= response.list.length; i++){
                if(response.list[i].dt_txt.indexOf("15:00:00") !== -1){
                    $(".forecast").append("<p> It will be " + response.list[i].main.temp + " on " + response.list[i].dt_txt + "</p>");
                    console.log(response.list[i].main.temp)
                    console.log(response.list[i].dt_txt)
      
            }
        }          
        })
    }
    // uses lat and lon data to determine uv index with api data
    function getUV (lat, lon){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + weatherAPIKey + "&lat=" + lat + "&lon=" + lon,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".today").append("<p> this is the uv " + response.value + "</p>");
        })
    }

    // click on search button to grab city name
    
    var cities = [];
     
       
        $(".searchButton").on("click", function(){
            var searchCity = $("#search-value").val();
            cities.push(searchCity);
  
            currentweather(searchCity);
            getForeCast(searchCity);
            generateButton(searchCity)
           
        })
        function generateButton(){
  
        // Function for dumping the JSON content for each button into the div
     

        // Function for displaying movie data
        function renderButtons() {
  
          // Deleting the buttons prior to adding new movies
          // (this is necessary otherwise you will have repeat buttons)
          $("#buttons-view").empty();
  
          // Looping through the array of movies
          for (var i = 0; i < cities.length; i++) {
  
            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of movie to our button
            a.addClass("City");
            // Adding a data-attribute
            a.attr("data-name", cities[i]);
            // Providing the initial button text
            a.text(cities[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
          }

        }
  
        // This function handles events where one button is clicked
        $(".searchButton").on("click", function(event) {
          event.preventDefault();
            
          var searchCity = $(this).attr("data-name");
          // This line grabs the input from the textbox
          var searchCity = $("#search-value").val().trim();
  
          // The movie from the textbox is then added to our array
          cities.push(searchCity);
  
          // Calling renderButtons which handles the processing of our movie array
          renderButtons();
  
        });
        $(document).on("click", ".city", generateButton);
        // Calling the renderButtons function to display the initial buttons
        renderButtons();
        }

    
});

