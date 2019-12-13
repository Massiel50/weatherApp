
$(document).ready(function(){
    // api.openweathermap.org/data/2.5/weather?q={city name}
    let city;
    const weatherAPI = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=";
    const weatherAPIKey = "3be2b2b6acc21e3760901d15acf91f72";
    // "1177fbd51295e22fa6e70b5d7b978a5c";

    // uses searched city name to get city climate data
    function currentweather(searchValue){
        $.ajax({
            url: weatherAPI + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".today").html("<h1>" + response.name + "Weather details</h1>" + "Temperature" + response.main.temp);

        });
    }
    // grabs forcast data from api
    function getForeCast (searchValue){
        $.ajax({
            url: "api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml" + weatherAPIKey,
            method: 'GET'
        }).then(function(response){
            console.log(response);

        })
    }
    // uses lat and lon data to determine uv index with api data
    function getUV (lat, lon){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + weatherAPIKey + "&lat=" + lat + "&lon=" + lon,
            method: 'GET'
        }).then(function(response){
            console.log(response);

            $(".uv").html("<p>uv" + response.value + "</p>");
        })
    }


    // click on search button to grab city name
    $(".searchButton").on("click", function(){
        var city = "london";

        currentweather(city);
        getForeCast(city);

    })
});

