var apiKey = "99ae5f456c92f7cf24d805292935704d";
var searchButton = document.getElementById("search-button");
var userSearch = document.getElementById("user-search");
var listHistory = document.getElementById("list");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumidity = document.getElementById("current-humidity");
var cardOneTemp = document.getElementById("card-one-temp");


searchButton.addEventListener("click", searchCity);
// listHistory.addEventListener("click", savedCity);

var allUserSearch = []; //Empty array to add the user search history in

//Function that runs when you click the button
function searchCity() {
    var userInput = document.getElementById("search-city").value;
    allUserSearch.push(userInput);
    localStorage.setItem("Search-History", JSON.stringify(allUserSearch));

    getCity();
    // getFutureDays();
    // console.log(allUserSearch);
}



listHistory.addEventListener("click", function(event) {
    var element = event.target; //Sets the element for the clickable function. The element returns the button that is made. EX. <button id ="0">houston</button>
    // console.log(element);
    var buttonId = element.id; //get the var element that we just made, and then get the id for the button that is clicked.
    // console.log("This Buttons ID is: " + buttonId);

    
    //console.log("User Input is: " + userInput);
    
    //This is the getCity function, but I need to make the below getElementById = our buttonId that we got.

    var userInput = document.getElementById(buttonId).innerText; 
    var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=99ae5f456c92f7cf24d805292935704d";

    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log("This is the fetch response");
        var lat = (data.city.coord.lat);
        var lon = (data.city.coord.lon);
        // var temperature = (data.list.main.temp);
        console.log(lat,lon);
        console.log("This is the Lat: " + lat);
        console.log("This is the lon: " + lon);
        // console.log("This is the temperature: " + temperature);
        getCoordinates(lon, lat);
        
    })

})



//Function that stores city history and displays it on the left
function cityHistory() {
    var storedCities = JSON.parse(localStorage.getItem("Search-History"));
    if (storedCities !== null) {
      allUserSearch = storedCities;
    //console.log(storedCities.length);

      for(i = 0; i < storedCities.length; i++)
      {
        var cityPlacement = storedCities[i];
        var li = document.createElement("button");
        li.textContent = cityPlacement;
        li.setAttribute("id", i);
        listHistory.appendChild(li);
      }
    }
  }

//This function gets the latitude and longitude

  function getCity()
  {
    var userInput = document.getElementById("search-city").value;
    var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=99ae5f456c92f7cf24d805292935704d";


    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log("This is the fetch response");
        var lat = (data.city.coord.lat);
        var lon = (data.city.coord.lon);
        // var temperature = (data.list.main.temp);
        console.log(lat,lon);
        console.log("This is the Lat: " + lat);
        console.log("This is the lon: " + lon);
        // console.log("This is the temperature: " + temperature);
        getCoordinates(lon, lat);
        
    })
  }


  function getCoordinates(lon, lat)
  {
    var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon=" + lon + "&appid=99ae5f456c92f7cf24d805292935704d";

    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var temperature = (data.list[0].main.temp);
        var wind = (data.list[0].wind.speed);
        var humidity = (data.list[0].main.humidity);

        currentTemp.innerText = "Temp: " + temperature;
        currentWind.innerText = "Wind: " + wind;
        currentHumidity.innerText = "Humidity: " + humidity;
       

        // console.log("This is the temperature: " + temperature);
        // console.log("This is the wind speed: " + wind);
        // console.log("This is the humidity: " + humidity);


    })
  }

  function getFutureDays()
  {
    var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=99ae5f456c92f7cf24d805292935704d";
    ;

    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        // var date = (data.forecast[0].time);
        // var temperature = (data.list[0].main.temp);

       
       

        // console.log("This is the temperature tomorrow: " + temperature);
        // console.log("This is the wind speed: " + wind);
        // console.log("This is the humidity: " + humidity);


    })
  }

 

cityHistory();
// savedCity();

