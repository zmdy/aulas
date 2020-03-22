/*
* aulas.txt
* http://github.com/zmdy/aulas.txt
* MIT Licensed
*
* Copyright (C) 2020 Hudson Uriel Ferreira, http://gihub.com/zmdy
*
* -------------------- *
*
* Function used to define multiple background-images for
* .bonisa slides
*
* ----- HOW TO USE ----- *
setRevealBackgrounds({
  // Defines the background images for each slide
    // The image names must all have the prefix name
    // Eg.: img-01.jpg, img-02.jpg, img-03.jpg
    // The prefix is "img-" 

  // If the images have different extensions,
  // the extension property must be null
  // and all imgs must have the extension
    // ...
    // imgs: {
    //  0: '01.jpg',
    //  1: '05.png,
    // ...
    // }
    // ...
    // extension: null
    // ...
    
  imgs: {
    0: '01',
    2: '02',
    4: '01'
  },

  // Defines the base directory used
  baseDir: 'accounting-theme/',

  // Defines the base name of the images
  baseName: 'bg-',

  // Defines the extension of the image
  extenstion: '.jpg'
})
*/
function setRevealBackgrounds(configs){
  var
    // Gets the slides
    slides = document.querySelectorAll('section .bonisa'),
    
    bg = configs || {
      // Defines the background images of each slide
      imgs: {
        0: '01',
        2: '02',
        4: '01'
      },

      // Defines the base directory used
      baseDir: 'accounting-theme/',
      
      // Defines the base name of the images
      baseName: 'bg-',

      // Defines the extension of the image
      extenstion: '.jpg'
    };

  slides.forEach(
    function(currentValue, currentIndex, listObj) { 
      if (bg.imgs[currentIndex]){
        currentValue.setAttribute(
          'data-background',
          (Bonisa.THEMES_DIR + bg.baseDir +
          bg.baseName + bg.imgs[currentIndex] + bg.extenstion).replace('//', '/')
        );

        currentValue.setAttribute(
          'data-background-size',
          'cover'
        );
      }
    }
  );
}