$("document").ready(function(){

  function getTimeRemaining(){
    var endtime =new Date("December 31, 2017 23:59:59");
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    $(".days").html(days);
    $(".hours").html(hours);
    $(".min").html(minutes);
    $(".sec").html(seconds);

      setTimeout(function()
      			{
      				getTimeRemaining();
      			},1000);
  }

getTimeRemaining();




})
