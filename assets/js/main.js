$(document).ready(function($){
	"use strict";
	
$(".sticky").sticky({topspacing: 0});
	
	
	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	
	  $('#youtube-vodeo').magnificPopup({
      type: 'iframe',
	  iframe: {
  
  patterns: {
    youtube: {
      index: 'youtube.com/',
      id: 'v=', 
      src: 'http://www.youtube.com/embed/%id%?autoplay=1'
    
    }
  },

  srcAction: 'iframe_src',
}	  
    });
	
/*==========================================
         progress ba/skill bar
==========================================*/
$('.skillbar').skillBars({
  // options here
});

/*==========================================
            Number counter
==========================================*/
$('.counter-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 13000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


/*
==========================================
mixer
==========================================
*/
var mixer = mixitup('.portfolio-content');

/*
==========================================
magnificPopup --portfolio
==========================================
*/
  $('.image-link').magnificPopup({type:'image'});	
  
  /*
==========================================
owl-carousel///team area
==========================================
*/
  $('.owl-carousel-item1').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	items:3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

 /* ==========================================
textimonial//team area
==========================================
*/
  $('.textimonial-area').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	items:3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

 /* ==========================================
/*slide carousel
==========================================
*/
  $('.slide-carosel').owlCarousel({
    loop:true,
    margin:20,
	autoplay:true,
    smartSpeed:1000,
    nav:true,
	items:3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 
  
/* Smoth Menu Css*/
// Add smooth scrolling to all links     
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smoth-menu a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
	   var $anchor = $(this);
	   var scrollTop = "50";
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('body').scrollspy({target: ".navbar-collapse", offset: 20});



}(jQuery));