$(document).ready(function() {
  $("#type").on("click", function() {
    var temperature = "";
    if ($("#type").text() === "Fahrenheit") {
      $("#type").html("Celcius");
      temperature = ($("#temp").text() - 32) * (5 / 9);
      temperature = Math.round(temperature * 100) / 100;
      $("#temp").html(temperature);
    } else {
      $("#type").html("Fahrenheit");
      temperature = $("#temp").text() * (9 / 5) + 32;
      temperature = Math.round(temperature * 100) / 100;
      $("#temp").html(temperature);
    }
  });

  if (navigator) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;

      var apiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=880650296ccb9436de975fccc3f32b64";

      $.getJSON(apiCall, function(results) {
        $("#locationName").html(results.name);
        $("#temp").html(results.main.temp);

        var pic = "http://openweathermap.org/img/w/" + results.weather[0].icon + ".png";
        $("#image").html("<img src='" + pic + "' />");
      });
    });
  } else {
    $("#locationName").html("Navigation not available.");
  }
});