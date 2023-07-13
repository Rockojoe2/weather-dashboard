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

//   function getCity()
//   {
//     var userInput = document.getElementById("search-city").value;
//     var cityAPI = "api.openweathermap.org/data/2.5/forecast?q=" + userInput +{&appid={API key}";
//   }


cityHistory();

