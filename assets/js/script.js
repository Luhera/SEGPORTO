// Obtém uma referência para o botão de abrir o menu
const openMenuButton = document.getElementById('openMenu');

// Obtém uma referência para o menu
const menu = document.querySelector('.cabecalho-menu');

// Adiciona um ouvinte de evento ao botão para abrir/fechar o menu
openMenuButton.addEventListener('click', function () {
  // Verifica se o menu está atualmente visível ou oculto
  const menuEstaVisivel = getComputedStyle(menu).display !== 'none';

  // Se o menu estiver visível, oculta-o; se estiver oculto, mostra-o
  if (menuEstaVisivel) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});


// Adicione um ouvinte de evento para o botão "Contatos de Emergência"




function acessarCamera() {
  var captureInput = document.getElementById('captureInput');
  if (captureInput) {
    captureInput.click();
    captureInput.addEventListener('change', function (event) {
      var imageFile = event.target.files[0];
      if (imageFile) {
        // Agora você pode fazer algo com a imagem, como exibi-la na página ou enviá-la para um servidor.
        var imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageFile);
        document.body.appendChild(imageElement);
      }
    });
  }
}




let newWorker;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(reg => {
    reg.addEventListener('updatefound', () => {
      newWorker = reg.installing;
    });
  });
  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}
