/*** 
Simple jQuery Slideshow Script
Released by Jon Raasch (jonraasch.com) under FreeBSD license: free to use or modify, not responsible for anything, etc.  Please link out to me if you like it :)
***/

function slideSwitch() {
  var $active = $('#sc_slideshow img.active');
  if ($active.length == 0)
    $active = $('#sc_slideshow img:last');

  // use this to pull the images in the order they appear in the markup
  //var $next = $active.next().length ? $active.next()
  //        : $('#sc_slideshow IMG:first');

  // uncomment the 3 lines below to pull the images in random order
  var $sibs = $active.siblings();
  var rndNum = Math.floor(Math.random() * $sibs.length);
  var $next = $($sibs[rndNum]);

  $active.addClass('last-active');

  $next.css({ opacity: 0.0 })
  .addClass('active')
  .animate({ opacity: 1.0 }, 1000,
    function () {
      $active.removeClass('active last-active');
    });

}

$(function () {
  setInterval(function () { slideSwitch(); }, 5000);
});