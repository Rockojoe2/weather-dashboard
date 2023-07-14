var apiKey = "99ae5f456c92f7cf24d805292935704d";
var searchButton = document.getElementById("search-button");
var userSearch = document.getElementById("user-search");
var listHistory = document.getElementById("list");

//Below are all the variables I used to update the sections in my index.html

//Current Variables
var currentDate = document.getElementById("current-date");
var currentDescription = document.getElementById("current-description");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumidity = document.getElementById("current-humidity");

//Card one variables
var cardOneDate = document.getElementById("card-one-date");
var cardOneDescription = document.getElementById("card-one-description");
var cardOneTemp = document.getElementById("card-one-temp");
var cardOneWind = document.getElementById("card-one-wind");
var cardOneHumidity = document.getElementById("card-one-humidity");

//Card Two variables
var cardTwoDate = document.getElementById("card-two-date");
var cardTwoDescription = document.getElementById("card-two-description");
var cardTwoTemp = document.getElementById("card-two-temp");
var cardTwoWind = document.getElementById("card-two-wind");
var cardTwoHumidity = document.getElementById("card-two-humidity");

//Card Three Variables
var cardThreeDate = document.getElementById("card-three-date");
var cardThreeDescription = document.getElementById("card-three-description");
var cardThreeTemp = document.getElementById("card-three-temp");
var cardThreeWind = document.getElementById("card-three-wind");
var cardThreeHumidity = document.getElementById("card-three-humidity");

//Card four Variables
var cardFourDate = document.getElementById("card-four-date");
var cardFourDescription = document.getElementById("card-four-description");
var cardFourTemp = document.getElementById("card-four-temp");
var cardFourWind = document.getElementById("card-four-wind");
var cardFourHumidity = document.getElementById("card-four-humidity");

//Card five Variables
var cardFiveDate = document.getElementById("card-five-date");
var cardFiveDescription = document.getElementById("card-five-description");
var cardFiveTemp = document.getElementById("card-five-temp");
var cardFiveWind = document.getElementById("card-five-wind");
var cardFiveHumidity = document.getElementById("card-five-humidity");



searchButton.addEventListener("click", searchCity);
// listHistory.addEventListener("click", savedCity);

var allUserSearch = []; //Empty array to add the user search history in

//Function that runs when you click the button
function searchCity() {
    var userInput = document.getElementById("search-city").value;
    allUserSearch.push(userInput);
    localStorage.setItem("Search-History", JSON.stringify(allUserSearch));

    getCity();
    getFutureDays();
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
        console.log(lat,lon);
        console.log("This is the Lat: " + lat);
        console.log("This is the lon: " + lon);
        // console.log("This is the temperature: " + temperature);
        getCoordinates(lon, lat);
      
        
        
    })

    //Day 1
    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

      //Data that we get from the Openweather API. Repeat same process for all days. Data will appear when we click the button in our history.

        var date = (data.list[10].dt_txt);
        var description = (data.list[10].weather[0].main);
        var temperature = (data.list[10].main.temp);
        var wind = (data.list[10].wind.speed);
        var humidity = (data.list[10].main.humidity);


       
       
       cardOneDate.innerText = "Date: " + date;
       cardOneTemp.innerText = "Temperature: " + temperature;
       cardOneWind.innerText = "Wind: " + wind;
       cardOneHumidity.innerText = "Humidity: " + humidity;

       if(description == "Clouds")
       {
         cardOneDescription.innerText = "☁️ Clouds";
       }
       else if(description == "Clear")
       {
         cardOneDescription.innerText = "🌥️ Clear";
       }
       else if(description == "Rain")
       {
         cardOneDescription.innerText = "🌧️ Rain";
       }

    })

    //Day 2
    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var date = (data.list[18].dt_txt);
        var description = (data.list[18].weather[0].main);
        var temperature = (data.list[18].main.temp);
        var wind = (data.list[18].wind.speed);
        var humidity = (data.list[18].main.humidity);

       
       
       cardTwoDate.innerText = "Date: " + date;
       cardTwoTemp.innerText = "Temperature: " + temperature;
       cardTwoWind.innerText = "Wind: " + wind;
       cardTwoHumidity.innerText = "Humidity: " + humidity;

       
       if(description == "Clouds")
       {
         cardTwoDescription.innerText = "☁️ Clouds";
       }
       else if(description == "Clear")
       {
         cardTwoDescription.innerText = "🌥️ Clear";
       }
       else if(description == "Rain")
       {
         cardTwoDescription.innerText = "🌧️ Rain";
       }

    })

    //Day 3
    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var date = (data.list[26].dt_txt);
        var description = (data.list[26].weather[0].main);
        var temperature = (data.list[26].main.temp);
        var wind = (data.list[26].wind.speed);
        var humidity = (data.list[26].main.humidity);

       
       
       cardThreeDate.innerText = "Date: " + date;
       cardThreeTemp.innerText = "Temperature: " + temperature;
       cardThreeWind.innerText = "Wind: " + wind;
       cardThreeHumidity.innerText = "Humidity: " + humidity;

       if(description == "Clouds")
       {
         cardThreeDescription.innerText = "☁️ Clouds";
       }
       else if(description == "Clear")
       {
         cardThreeDescription.innerText = "🌥️ Clear";
       }
       else if(description == "Rain")
       {
         cardThreeDescription.innerText = "🌧️ Rain";
       }

    })

        //Day 4
        fetch(cityAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
    
            var date = (data.list[34].dt_txt);
            var description = (data.list[34].weather[0].main);
            var temperature = (data.list[34].main.temp);
            var wind = (data.list[34].wind.speed);
            var humidity = (data.list[34].main.humidity);
    
           
           
           cardFourDate.innerText = "Date: " + date;
           cardFourTemp.innerText = "Temperature: " + temperature;
           cardFourWind.innerText = "Wind: " + wind;
           cardFourHumidity.innerText = "Humidity: " + humidity;

           if(description == "Clouds")
           {
             cardFourDescription.innerText = "☁️ Clouds";
           }
           else if(description == "Clear")
           {
             cardFourDescription.innerText = "🌥️ Clear";
           }
           else if(description == "Rain")
            {
              cardFourDescription.innerText = "🌧️ Rain";
            }
    
    
        })

          //Day 5
          fetch(cityAPI)
          .then(function (response) {
              return response.json();
          })
          .then(function (data){
      
              var date = (data.list[36].dt_txt);
              var description = (data.list[36].weather[0].main);
              var temperature = (data.list[36].main.temp);
              var wind = (data.list[36].wind.speed);
              var humidity = (data.list[36].main.humidity);
      
              
              
              cardFiveDate.innerText = "Date: " + date;
              cardFiveTemp.innerText = "Temperature: " + temperature;
              cardFiveWind.innerText = "Wind: " + wind;
              cardFiveHumidity.innerText = "Humidity: " + humidity;

              if(description == "Clouds")
              {
                cardFiveDescription.innerText = "☁️ Clouds";
              }
              else if(description == "Clear")
              {
                cardFiveDescription.innerText = "🌥️ Clear";
              }

              else if(description == "Rain")
              {
                cardFiveDescription.innerText = "🌧️ Rain";
              }
              
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
        li.setAttribute("id", i); //Changed this to id because we're going to need to get the id's in another function
        listHistory.appendChild(li);
      }
    }
  }

//This function gets the latitude and longitude, and fires off the getCoordinates function based off the lattitude and longitude

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


      //Displays data of current day

        var date = (data.list[0].dt_txt);
        var temperature = (data.list[0].main.temp);
        var wind = (data.list[0].wind.speed);
        var humidity = (data.list[0].main.humidity);
        var description = (data.list[0].weather[0].main);

        currentDate.innerText = "Date: " + date;
        currentTemp.innerText = "Temp: " + temperature;
        currentWind.innerText = "Wind: " + wind;
        currentHumidity.innerText = "Humidity: " + humidity;

        console.log("Description is: " + description);

        if(description == "Clouds")
        {
          currentDescription.innerText = "☁️ Clouds";
        }
        else if(description == "Clear")
        {
          currentDescription.innerText = "🌥️ Clear";
        }
       

        //console.log("This is the temperature: " + temperature);
        // console.log("This is the wind speed: " + wind);
        // console.log("This is the humidity: " + humidity);


    })
  }

  //This is similar to the listHistory function, but this works on search rather than the button history.
  function getFutureDays(lon, lat)
  {
    var userInput = document.getElementById("search-city").value;
    var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=99ae5f456c92f7cf24d805292935704d";

    //Day 1
    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var date = (data.list[10].dt_txt);
        var description = (data.list[10].weather[0].main);
        var temperature = (data.list[10].main.temp);
        var wind = (data.list[10].wind.speed);
        var humidity = (data.list[10].main.humidity);


       
       
       cardOneDate.innerText = "Date: " + date;
       cardOneTemp.innerText = "Temperature: " + temperature;
       cardOneWind.innerText = "Wind: " + wind;
       cardOneHumidity.innerText = "Humidity: " + humidity;

       if(description == "Clouds")
       {
         cardOneDescription.innerText = "☁️ Clouds";
       }
       else if(description == "Clear")
       {
         cardOneDescription.innerText = "🌥️ Clear";
       }
       else if(description == "Rain")
       {
         cardOneDescription.innerText = "🌧️ Rain";
       }

    })

    //Day 2
    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var date = (data.list[18].dt_txt);
        var description = (data.list[18].weather[0].main);
        var temperature = (data.list[18].main.temp);
        var wind = (data.list[18].wind.speed);
        var humidity = (data.list[18].main.humidity);

       
       
       cardTwoDate.innerText = "Date: " + date;
       cardTwoTemp.innerText = "Temperature: " + temperature;
       cardTwoWind.innerText = "Wind: " + wind;
       cardTwoHumidity.innerText = "Humidity: " + humidity;

       
       if(description == "Clouds")
       {
         cardTwoDescription.innerText = "☁️ Clouds";
       }
       else if(description == "Clear")
       {
         cardTwoDescription.innerText = "🌥️ Clear";
       }
       else if(description == "Rain")
       {
         cardTwoDescription.innerText = "🌧️ Rain";
       }

    })

    //Day 3
    fetch(cityAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var date = (data.list[26].dt_txt);
        var description = (data.list[26].weather[0].main);
        var temperature = (data.list[26].main.temp);
        var wind = (data.list[26].wind.speed);
        var humidity = (data.list[26].main.humidity);

       
       
       cardThreeDate.innerText = "Date: " + date;
       cardThreeTemp.innerText = "Temperature: " + temperature;
       cardThreeWind.innerText = "Wind: " + wind;
       cardThreeHumidity.innerText = "Humidity: " + humidity;

       if(description == "Clouds")
       {
         cardThreeDescription.innerText = "☁️ Clouds";
       }
       else if(description == "Clear")
       {
         cardThreeDescription.innerText = "🌥️ Clear";
       }
       else if(description == "Rain")
       {
         cardThreeDescription.innerText = "🌧️ Rain";
       }

    })

        //Day 4
        fetch(cityAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
    
            var date = (data.list[34].dt_txt);
            var description = (data.list[34].weather[0].main);
            var temperature = (data.list[34].main.temp);
            var wind = (data.list[34].wind.speed);
            var humidity = (data.list[34].main.humidity);
    
           
           
           cardFourDate.innerText = "Date: " + date;
           cardFourTemp.innerText = "Temperature: " + temperature;
           cardFourWind.innerText = "Wind: " + wind;
           cardFourHumidity.innerText = "Humidity: " + humidity;

           if(description == "Clouds")
           {
             cardFourDescription.innerText = "☁️ Clouds";
           }
           else if(description == "Clear")
           {
             cardFourDescription.innerText = "🌥️ Clear";
           }
           else if(description == "Rain")
            {
              cardFourDescription.innerText = "🌧️ Rain";
            }
    
    
        })

          //Day 5
          fetch(cityAPI)
          .then(function (response) {
              return response.json();
          })
          .then(function (data){
      
              var date = (data.list[36].dt_txt);
              var description = (data.list[36].weather[0].main);
              var temperature = (data.list[36].main.temp);
              var wind = (data.list[36].wind.speed);
              var humidity = (data.list[36].main.humidity);
      
              
              
              cardFiveDate.innerText = "Date: " + date;
              cardFiveTemp.innerText = "Temperature: " + temperature;
              cardFiveWind.innerText = "Wind: " + wind;
              cardFiveHumidity.innerText = "Humidity: " + humidity;

              if(description == "Clouds")
              {
                cardFiveDescription.innerText = "☁️ Clouds";
              }
              else if(description == "Clear")
              {
                cardFiveDescription.innerText = "🌥️ Clear";
              }

              else if(description == "Rain")
              {
                cardFiveDescription.innerText = "🌧️ Rain";
              }
              
                })


  }

cityHistory();


