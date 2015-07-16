// jQuery JSON Carousel
//
// Version 1.0
//
// James M Richards
// JOMBI designs
// 16 July 2014
//
// Usage: $('.parent').jsonCarousel( options )
//
// Options:   root                - (string)  root folder to display; 
//                                            default: /
//            json                - (string)  location of JSON data source to use; *REQUIRED
//            post                - (boolean) When true, uses the jQuery.post() method for serverside files
//                                            When false, uses the jQuery.getJSON() method for Web Services or static files
//                                            default: false
//            imgAlt              - (string)  alt to apply to each image. NOTE: adding * to the alt will include the file position.
//            imgClass            - (string)  class attribute to apply to the image. NOTE: adding * to the class will include the file position.
//            maskSrc             - (string)  When has a value, applies a mask to the image.
//
// Special thanks to:
//    
//    using JSON data
//      - Cory S.N. LaViska - http://abeautifulsite.net/notebook.php?article=58
//    image masking
//      - rj zaworski - http://blog.rjzaworski.com/2011/03/masking-images-with-css-and-jquery/
//    

(function ($) {
  $.extend($.fn, {
    jsonCarousel: function (o) {
      if (!o) o = {};
      if (o.root === undefined) o.root = '/';
      if (o.json === undefined) throw "JSON data source not defined";
      if (o.post === undefined) o.post = false;

      if (!o.root.match('$/')) o.root += '/';

      $(this).each(function () {

        function showCarousel(c, r) {
          if (o.post) {
            $.post(o.json, { dir: r }, function (data) {
              bindJson(c, r, data), "json";
            });
          } else {
            $.getJSON(o.json, function (data) {
              bindJson(c, r, data), "json";
            }, "json");
          }
        }

        function bindJson(c, r, data) {
          var first = true;
          var runner = 0;

          $.each(data, function (id, name) {
            var tag;
            runner++;
            tag = $('<img>').attr({
              "src": r + name
            });

            if (first) {
              tag.addClass("active");
              first = false;
            }

            if (o.imgAlt !== undefined) tag.attr("alt", o.imgAlt.replace('*', runner));
            if (o.imgClass !== undefined) tag.addClass(o.imgClass.replace('*', runner));

            if (o.maskSrc !== undefined) applyMask(tag, o.maskSrc);

            $(c).append(tag);
          });
        }

        function applyMask(t, m)
        {
          $(t).css('background', 'url(' + $(t).attr('src') + ') no-repeat center center').attr('src', m);
        }

        showCarousel($(this), encodeURI(o.root));

      });
    }
  });
})(jQuery);