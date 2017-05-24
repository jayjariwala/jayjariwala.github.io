requirejs.config({

    paths: {
        "jquery": "jquery-3.2.1.min",
        "jquery.bootstrap": "bootstrap.min"
    },

    shim: {
        "jquery.bootstrap": {

            deps: ["jquery"]
        }
    }
});

require(["jquery", "jquery.bootstrap"], function ($) {
    // $('#myModalButton').show();

    $('.scrollToTop').fadeOut();
    $(window).scroll(function(event){

      if ($(this).scrollTop() > 100)
      {
           $('.scrollToTop').fadeIn();
      }
    else {
         $('.scrollToTop').fadeOut();
      }

      var scroll = $(window).scrollTop();
      if (scroll > 30) {
        console.log(scroll);
        $( '.navbar-fixed-top' ).each(function () {
          this.style.setProperty( 'background-color','rgba(0,0,0,0.3)', 'important' );
        });
        $('.brand').each(function(){
          this.style.setProperty('border','2px solid rgba(255,255,255,0.5)')
        })
      }
      if (scroll < 30) {
        $( '.navbar-fixed-top' ).each(function () {
          this.style.setProperty( 'background-color','rgba(0,0,0,0.0)', 'important' );
        });
        $('.brand').each(function(){
          this.style.setProperty('border','3px solid rgba(0,0,0,0.5)')
        })
      }

   });
//Click event to scroll to top
     $('.scrollToTop').click(function(){
         $('html, body').animate({scrollTop : 0},800);
       return false;
      });

      $('.nav.navbar-nav.navbar-right li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});



});
