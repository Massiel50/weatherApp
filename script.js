
$(document).ready(function(){
    // api.openweathermap.org/data/2.5/weather?q={searchCity name}
    const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
    const weatherAPIKey = "3be2b2b6acc21e3760901d15acf91f72";
    // "1177fbd51295e22fa6e70b5d7b978a5c";

    // uses searched city name to get city climate data
    function currentweather(searchCity){
        $.ajax({
            url: weatherAPI + searchCity + "&units=imperial&appid=" + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".today").append("<h2>" + response.name + "Weather details</h2>" + "<p>Temperature: " + response.main.temp + "</p>");
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
 
            for (var i = 1; i < response.list.length[5]; i++){
                $(".forecast").append("<p> feels like " + response.list[i].main.temp + "</p>");
                console.log(response.list[i].main.temp)
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
    $(".searchButton").on("click", function(){
        var searchCity = $("#search-value").val();

        currentweather(searchCity);
        getForeCast(searchCity);
       
    })
});

