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
      bgImages = document.querySelectorAll('img.full'),
      filter = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    // Percorre cada imagem com a classe 'full'
    for(let slide in bgImages){
      if(typeof bgImages[slide] == 'object'){
        // Extrai a fonte (src) da imagem
        var bgSRC = bgImages[slide].src;

        // Define o atributo data-background do elemento pai
        // como a imagem base
        bgImages[slide].parentNode.setAttribute('data-background', bgSRC);
      }
    }
    
      // Percorre cada slide da apresentação
    for(let slide in presentation){
      if(typeof presentation[slide] == 'object'){
        // Analisa o primeiro elemento do slide
        var
          firstElement = presentation[slide].firstElementChild.tagName,
          lastElement = presentation[slide].lastElementChild.tagName;

        // Percorre cada elemento do filtro
        for(let element in filter){
          // Se o elemento filtrado for igual ao tipo de tag do slide
          if(firstElement.toLowerCase() == filter[element].toLowerCase()){
            try{
              // Define uma classe
              presentation[slide].className += ' STANDARD' + filter[element].toLowerCase();
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