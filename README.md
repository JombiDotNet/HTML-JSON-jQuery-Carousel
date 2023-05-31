# HTML-JSON-jQuery-Carousel

A jQuery plugin to create a masked carousel from a JSON dataset

## A Simple jQuery Slideshow by Jon Raasch

Special thanks goes to [Jon Raasch](http://jonraasch.com/blog/a-simple-jquery-slideshow) for creating a Simple jQuery Slideshow.

**NOTE:** I have made changes to the sc_slideshow.css and sc_slideshow.js files for branding purposes. The original script searched for an object id of 'slideshow'. The id is now called 'sc_slideshow'. These changes are found in both the 'css/sc_slideshow.css' and 'js/sc_slideshow.js' files.

## Other Tools

* [$.postJSON() for jQuery](https://www.abeautifulsite.net/posts/postjson-for-jquery/) - Cory S.N. LaViska
* [Masking images with CSS and jQuery](http://blog.rjzaworski.com/2011/03/masking-images-with-css-and-jquery/) - rj zaworski

## Background

I was approached by a client to create a carousel for their website. The pictures in the carousel were to have rounded borders and have an overlapping images.

## Approach

### Picture Editing

The pictures for the carousel would be stock photos obtained from any number of websites. Each photo could have different dimensions and orientations. The simplest solution would have been to open the pictures in Photoshop, crop them as needed, add a border with rounded corners, and export the picture as a PNG file.

Issues:

* Requires knowledge of photo editing software to resize and add consistent rounded corners.
* Rounded corners in jpg files are not transparent.
* Pictures stored as png files are very large.

## Creator

**Jim Richards** 

## Copyright and license

* Code and documentation Copyright &copy; 2014-2015 Jim Richards - Jombi Designs. Code released under [MIT LICENSE](https://github.com/JombiDotNet/HTML-JSON-jQuery-Carousel/LICENSE) with permission from client.
* Images are of the Iowa State University Campanile located in Ames, IA. Pictures taken by Jim Richards and released under [Creative Commons CC0](http://creativecommons.org/publicdomain/zero/1.0/legalcode).
