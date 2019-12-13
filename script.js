
$(document).ready(function(){
    // api.openweathermap.org/data/2.5/weather?q={searchValue name}
    const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
    const weatherAPIKey = "3be2b2b6acc21e3760901d15acf91f72";
    // "1177fbd51295e22fa6e70b5d7b978a5c";

    // uses searched city name to get city climate data
    function currentweather(searchValue){
        $.ajax({
            url: weatherAPI + searchValue + "&units=imperial&appid=" + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".today").append("<h2>" + response.name + "Weather details</h2>" + "<p>Temperature: " + response.main.temp + "</p>");
            $(".today").append("<p>Wind Speed: " + response.wind.speed + "</p>");
            getUV(response.coord.lat, response.coord.lon)
        });
    }
    // grabs forcast data from api
    function getForeCast (searchValue){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=imperial&appid=" + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);
            

            $(".forecast").html("<p> feels like " + response.list[0].main.feels_like + "</p>");
            
            
            
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
    $(".searchButton").on("click", function(){
        var searchValue = $("#search-value").val();

        currentweather(searchValue);
        getForeCast(searchValue);
       
    })
});

