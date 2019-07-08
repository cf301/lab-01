/* eslint-disable no-undef */
'use strict';
// used this as a base, expanded outward from here: https://www.fourfront.us/blog/jquery-window-width-and-media-queries

//flags for mode
var mobile = false;
var tablet = false;
var desktop = false;

$(document).ready(function() {
  // run test on initial page load
  checkSize();
  // run test on resize of the window
  $(window).resize(checkSize);
});

//Function to the css rule, ties to a changed event unique to the change.
function checkSize(){
  //if #a is 960px wide, we're in desktop
  if ( $('#a').css('width') === '960px' && desktop === false ){
    // for each div,
    $('div').each( function(){
      //randomize color
      $(this).css('background-color', random_rgba() );
    });

    mobile = false;
    tablet = false;
    desktop = true;
  }

  //if #a is 960px wide, we're in tablet
  if ( $('#a').css('width') === '760px' && tablet === false ){
    // for each div,
    $('div').each( function(){
      //randomize color
      $(this).css('background-color', random_rgba() );
    });

    mobile = false;
    tablet = true;
    desktop = false;
  }

  //if #a is 480 wide, we're in mobile
  if ( $('#a').css('width') === '480px' && mobile === false ){
    // for each div,
    $('div').each( function(){
      //randomize color
      $(this).css('background-color', random_rgba() );
    });

    mobile = true;
    tablet = false;
    desktop = false;
  }
}
