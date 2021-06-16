console.log('h1');

//$(function(){
    //$('.timeContainer').css({color:'red',})
  //$(".jumbotron").hide();
//});

//$(".time-block").on(click, function(){
  //  $.fadetoggle(200);
//});

$("#currentDay").text(moment().format('MMMM Do YYYY '));

$(".saveBtn").on('click', function(){
    // console.log("Save btn clicked", $(this)); 
    var time = $(this).siblings('.hour').text(); 
    console.log(time); 
    var description = $(this).siblings('.description').val();
    //Saving values in LS 
    localStorage.setItem(time,description);
})


//Display the text back on the HTML page 
$("#9d").val(localStorage.getItem("9am"));
$("#10d").val(localStorage.getItem("10am"));
$("#11d").val(localStorage.getItem("11am"));
$("#12d").val(localStorage.getItem("12pm"));
$("#1d").val(localStorage.getItem("1pm"));
$("#2d").val(localStorage.getItem("2pm"));
$("#3d").val(localStorage.getItem("3pm"));
$("#4d").val(localStorage.getItem("4pm"));
$("#5d").val(localStorage.getItem("5pm"));
$("#6d").val(localStorage.getItem("6pm"));
$("#7d").val(localStorage.getItem("7pm"));

var currentTime = moment().hours(); 
//console.log(currentTime)


// loop over time blocks
$('.time-block').each(function () {
// then grab the blockhor 
var blockhour = $(this).find('.hour').text();
//compare it with the current time 

// if else if else 

if (blockhour > currentTime) 
{
    $(".row").addClass(".past"); 
}
else if (blockhour = currentTime)
{
    $(".row").addClass(".present");
}
else if (blockhour < currentTime)
{
    $(".row").addClass(".future")
}
});