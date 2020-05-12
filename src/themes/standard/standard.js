function standard(){
  // Identifica a biblioteca de Slides utilizada
  if(Bonisa.engine == 'reveal'){
    Reveal.initialize({
      // Transition style
      transition: 'fade', // none/fade/slide/convex/concave/zoom

      // Transition speed
      transitionSpeed: 'slow' // default/fast/slow

      // Background
    });
  

    // Configura os backgrounds de cada slide
    var
      presentation = document.querySelectorAll('section.bonisa'),
      filter = ['h1', 'h2', 'h3'],
      background = [
        Bonisa.THEMES_DIR + 'standard/bg/modelo-geometrico-01.png',
        Bonisa.THEMES_DIR + 'standard/bg/modelo-geometrico-02.png',
        Bonisa.THEMES_DIR + 'standard/bg/modelo-geometrico-03.png',
        Bonisa.THEMES_DIR + 'standard/bg/modelo-geometrico-04.png'
      ];

    // Percorre cada slide da apresentação
    for(let slide in presentation){
      if(typeof presentation[slide] == 'object'){
        // Analisa o primeiro elemento do slide
        var
          firstElement = presentation[slide].firstElementChild.tagName,
          lastElement = presentation[slide].lastElementChild.tagName;
        
        // Pre-define o background de fundo
        presentation[slide].setAttribute('data-background', background[background.length - 1]);
        presentation[slide].setAttribute('data-background-size', '100vw auto');

        // Percorre cada elemento do filtro
        for(let element in filter){
          // Se o elemento filtrado for igual ao tipo de tag do slide
          if(firstElement.toLowerCase() == filter[element].toLowerCase()){
            try{
              // Aplica o background definido
              presentation[slide].setAttribute('data-background', background[element]);

              // Define uma classe
              presentation[slide].className += ' STANDARD' + filter[element];
            } catch(error){
              console.log(error);
            }

            break;
          }
        }
      }
    }

    // Atualiza a apresentação
    Reveal.configure();
  }

  window.onresize = function(){
    if(window.innerWidth < 1024 || window.innerHeight < 570 ){
      alert("Recomenda-se uma resolução mínima de 1024 X 570 px para uma boa experiência com este tema!");
    }
  }
}