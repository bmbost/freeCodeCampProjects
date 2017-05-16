function randomBtnFunction() {
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

function searchBtnFunction() {
  $("#searchResults").html("");
  var search = $("#txtInput").val();
  var apiCall = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURIComponent(search) + "&format=json&callback=?";
  $.getJSON(apiCall, function(json) {
    for (var i = 9; i >= 0; i--) {
      $("#searchResults").prepend(
        "<div class='row'><a href=" + json[3][i] + " target='_blank'><div class='col-sm-11 col-sm-offset-1' id='resultPost'><p>" + json[1][i] + "</p>" +
        "<p>" + json[2][i] + "</p>" + 
        "<p>" + json[3][i] + "</p></div></a></div>"
      );
    }
  });
}