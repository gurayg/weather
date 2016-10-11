///<reference path="../typings/globals/jquery/index.d.ts" />
function getLocation() {
var curLocation = {};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            
            
            curLocation.longitude = position.coords.longitude;
            curLocation.latitude = position.coords.latitude;
console.log(curLocation);
            return curLocation;

        })
    }

    
}

function getWeather() {
console.log("Get Weeather");
    console.log("before get location");
    var curLocation = getLocation();
        console.log("after get location" + curLocation);


        $.ajax({
                url: "https://simple-weather.p.mashape.com/weather?lat=" + curLocation.latitude + "&lng=" + curLocation.longitude,
                headers: {
                    "X-Mashape-Key": "RVhgp3CSfHmshFFxUpbsK1ex43Llp1QyXOOjsncMEIX4keAFY6",
                    "Accept": "text/plain"
                }
            })
            .done(function (data) {
                //console.log($.parseJSON(data));
                $("#lat").html(curLocation.latitude);
                $("#lon").html(curLocation.longitude);
                $("#current").html(data);
            });

}


getWeather();