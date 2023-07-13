var apiKey = "99ae5f456c92f7cf24d805292935704d";
var searchButton = document.getElementById("search-button");
var userSearch = document.getElementById("user-search");
var listHistory = document.getElementById("list");



searchButton.addEventListener("click", searchCity);

var allUserSearch = []; //Empty array to add the user search history in

//Function that runs when you click the button
function searchCity() {
    var userInput = document.getElementById("search-city").value;
    allUserSearch.push(userInput);
    localStorage.setItem("Search-History", JSON.stringify(allUserSearch));

    getCity();
    // console.log(allUserSearch);
}

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
        li.setAttribute("data-index", i);
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
        console.log(lat,lon);
        console.log("This is the Lat: " + lat);
        console.log("This is the lon: " + lon);
        
    })
  }

  function getCoordinates(lon, lat)
  {
    
  }





cityHistory();

