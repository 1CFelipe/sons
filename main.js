function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.currentTime = 0;
    elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido:', idElementoAudio);
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");
const listaDeAudios = document.querySelectorAll("audio");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const audio = listaDeAudios[contador];
  const idAudio = audio ? `#${audio.id}` : null;

  tecla.addEventListener('click', function () {
    if (!idAudio) return;
    tecla.classList.add('ativa');
    tocaSom(idAudio);
    setTimeout(() => tecla.classList.remove('ativa'), 150);
  });

  tecla.addEventListener('keydown', function (evento) {
    if (!idAudio) return;
    if (evento.code === 'Space' || evento.code === 'Enter') {
      evento.preventDefault();
      tecla.classList.add('ativa');
      tocaSom(idAudio);
    }
  });

  tecla.addEventListener('keyup', function () {
    tecla.classList.remove('ativa');
  });
}
