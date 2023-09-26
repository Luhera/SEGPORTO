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
