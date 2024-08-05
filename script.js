// CRUD
// Crear Leer Actualizar Borrar

// alert("Hola Mundo! <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Malinali Becerril')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
loop: true,
delay: 75,
});
  
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString('...Por lo tanto, lo que debemos hacer es esforzarnos y perseverar y NUNCA RENDIRNOS.')
    .pauseFor(300)
    .deleteAll()
    .typeString('Dalai Lama')
    .pauseFor(1000)
    .start();
    let audioElement; // Variable para almacenar el objeto Audio


    const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
    
    mainElement.addEventListener('click', function() {
        if (!audioElement) {
            audioElement = new Audio('assets/music/please.mp3');
        }
        audioElement.play();
    });
    
    const pauseButton = document.getElementById('pauseButton');
    
    pauseButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            pauseButton.textContent = "Pausar";
        } else {
            audioElement.pause();
            pauseButton.textContent = "Reanudar";
        }
    });
    