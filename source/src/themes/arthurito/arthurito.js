function arthurito(){
  // Identifica a biblioteca de Slides utilizada
  if(Bonisa.engine == 'reveal'){
    Reveal.initialize({
      // Transition style
      transition: 'fade', // none/fade/slide/convex/concave/zoom

      // Transition speed
      transitionSpeed: 'slow' // default/fast/slow
    });
  }

  // Ativa o modo de tela cheia
  if (document.fullscreenEnabled) {
    alert("Ative a tela cheia para uma experiência mais agradável ;)")
  }
}