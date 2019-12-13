weather dash board header

search city on the top left

recent searches' button under search bar

main panel wthat will dynamically display 
    city name
    humidity
    wind speed
    uv index
      will write a conditional that the color will
      indicate the level uv

5 day forcast widget display
 date
 weather icon/pic
 temo
 humidity

if user has aready searched a city
  city name will be save for them to click
  on again in future

notes

get api keys from open weather
create on click event fot th search button
create function to search for the weather
   make an ajax call to current weather api
   append data to the page
create function to get the forcast
   make ajax call to the forcast api
   append that to the page
create a uv function for the uv index
   make ajax call to the uv api
   append that to the search weather function

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


