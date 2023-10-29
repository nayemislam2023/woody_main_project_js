
jQuery(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
        });


});

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  
  
  /*isotop js*/
  (function(){

'use strict';


var $projects = $('.project-bottom');

$projects.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$('.project-nav > li').on('click', function(e){

    e.preventDefault();

    var filter = $(this).attr('data-filter');

    $('.project-nav > li').removeClass('active');
    $(this).addClass('active');

    $projects.isotope({filter: filter});

});
/*

$('.card').mouseenter(function(){

    $(this).find('.card-overlay').css({'top': '-100%'});
    $(this).find('.card-hover').css({'top':'0'});

}).mouseleave(function(){

    $(this).find('.card-overlay').css({'top': '0'});
    $(this).find('.card-hover').css({'top':'100%'});

});
*/

})(jQuery);


