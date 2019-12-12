
$(document).ready(function(){
    // api.openweathermap.org/data/2.5/weather?q={city name}
    const weatherAPI = "api.openweathermap.org/data/2.5/weather?q=London";
    const weatherAPIKey = "1177fbd51295e22fa6e70b5d7b978a5c";

    // uses searched city name to get city climate data
    function currentweather(searchValue){
        $.ajax({
            url: "",
            method: 'GET'
        }).then(function(response)){
            console.log(response);

            var title = $(".today").html("<h1>" + response.name + "Weather details</h1>" + "Temperature" + response.main.temp);

        }
    }
    // grabs forcast data from api
    function getForeCast (searchValue){
        $.ajax({
            url: "api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml",
            method: 'GET'
        }).then(function(response){
            console.log(response);

        })
    }
    // uses lat and lon data to determine uv index with api data
    function getUV (lat, lon){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + weatherAPIKey + "&" + lat + "=" + lat + "&" + lon + "=" + lon,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".uv").html("<p>uv" + response.value + "</p>");
        })
    }


    // click on search button to grab city and get data
    $(".searchButton").on("click", function(){
        var searchValue = $("#search-value").val();

        currentweather(searchValue);
        getForeCast(searchValue);

    })
});

// 5 day forcast api format
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
//Parameters
// q city name and country code divided by comma, use ISO 3166 country codes

// uv index api format
// By geographic coordinates
// API call:
http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
// Parameters
// appid - personal API key

// lat, lon - coordinates of the location of your interest (latitude/longitude)

// Examples of API calls:
// api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37