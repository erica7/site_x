// JavaScript - Homepage Animation

var speed = 0;

if($(window).width() < 804){
  speed = 0;
} else {
  speed = 500;
}


$(document).ready(function(){

  setTimeout(function() {

    //var speed = 500;

    setTimeout(function(){
      $("#left").animate({
        opacity: 1
      }, speed*2);
    }, speed*.7);

    setTimeout(function(){
      $("#top").animate({
        opacity: .5
      }, speed*2);
    }, speed*.3);

    setTimeout(function(){
      $("#right").animate({
        opacity: .5
      }, speed*2);
    }, speed*.3);

    setTimeout(function(){
      $("#bottom").animate({
        opacity: .5
      }, speed*2);
    }, speed*.3);


    $("#center2").animate({
      opacity: 1,
      width: "282px"
    }, speed);

    setTimeout(function(){
      $("#center").animate({
        opacity: 1,
        width: "282px"
      }, speed);
    }, speed/2);

  }, 500);


  var hoverSpeed = 200;

  $("#farRight").hover(function() {
    $("#farRight").css('cursor', 'pointer');
    $("#bottom,#top,#right").animate({opacity:1},hoverSpeed);
    $("#farRight").animate({opacity:1},hoverSpeed);
  }, function(){
    $("#bottom,#top,#right").animate({opacity:0.5},hoverSpeed/2);
    $("#farRight").animate({opacity:0},hoverSpeed);
  });

  $("#farLeft").hover(function() {
    $("#farLeft").css('cursor', 'pointer');
    $("#farLeft").animate({opacity:1},hoverSpeed);
  }, function(){
    $("#farLeft").animate({opacity:0},hoverSpeed);
  });

  $("#farLeft").click(function() {
    window.location.href = "/contact";
  });

  $("#farRight").click(function() {
    window.location.href = "/portfolio";
  });

})
