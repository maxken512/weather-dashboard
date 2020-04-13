//set dates

$("#today").html(moment().format('MM/D/YYYY'));
$("#oneDayFrom").html(moment().add(1,'days').format('MM/D/YYYY'));
$("#twoDayFrom").html(moment().add(2,'days').format('MM/D/YYYY'));
$("#threeDayFrom").html(moment().add(3,'days').format('MM/D/YYYY'));
$("#fourDayFrom").html(moment().add(4,'days').format('MM/D/YYYY'));
$("#fiveDayFrom").html(moment().add(5,'days').format('MM/D/YYYY'));

// error

$(document).ajaxError(function(){
    alert("city not found!")
});

$(document).on('click', '#searchButton, .query', function(event){
    $("#currentCity").empty();   
    $("#currentUV").empty();
    $("#currentTemp").empty();
    $("#currentHumidity").empty();
    $("#currentWind").empty();



var userInput = $("cityinput").val().trim();
var APIKey = "5a110021b8d7f6a4103e7384e0c37b6c";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;

$.ajax({
    method: "GET",
    url: queryURL
}). then(function(response){
    console.log(response);
})

});