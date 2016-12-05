/****************************************************************** FONTSIE ***/

try{Typekit.load({ async: true });}catch(e){}

/***************************************************************** /FONTSIE ***/

/************************************************************ SCROLLEFFECTS ***/

function check_if_in_view() {
  var window_height = $window.height();
  //var window_top_position = $window.scrollTop();
  var window_top_position = $('.scroll-content').scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

/*********************************************************** /SCROLLEFFECTS ***/

/**************************************************************** UTILITIES ***/

/* remove empty p-tags */
$('p').each(function() {
  var $this = $(this);
  if($this.html().replace(/\s|&nbsp;/g, '').length == 0) $this.remove();
});

/* smooth scroll */
$(function() {
  $('a[href*="#"]:not([href="#"]):not([href*="#accordion"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.scroll-content').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* make inline svg */
$('img.svg-inline').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  $.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');
});

$(document).ready(function($){
  
});

/************************************************************** /UTLILITIES ***/
