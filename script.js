$(document).ready(function() {

  $("#comicSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#comicInput").val();
    console.log(value);

    var myurl= "http://xkcd.com/" + value + "/info.0.json";
  	$.ajax({
  	    url : myurl,
  	    dataType : "json",
  	    success : function(json) {
  		console.log(json);


        var results = "";
        		results += '<h2>Comic title: ' + json.title + "</h2>";
        	//	for (var i=0; i<json.weather.length; i++) {
        	//	    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        	//	}
        	//	results += '<h2>' + json.main.temp + " &deg;F</h2>"
        //    results += '<h3>Humidity: ' + json.main.humidity + "&#37;</h3>"
        //    results += '<h3>Wind Speed: ' + json.wind.speed + " Mph</h3>"
        //		results += "<p>"
        //		for (var i=0; i<json.weather.length; i++) {
        //		    results += json.weather[i].description
        //		    if (i !== json.weather.length - 1)
        //			results += ", "
        //		}
        //		results += "</p>";
        //    results += "<hr>";
        		$("comicResults").html(results);
          }
  	});

  });



});
