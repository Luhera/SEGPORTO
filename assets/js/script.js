
// Adicione um ouvinte de evento para o botão "Contatos de Emergência"
document.getElementById('mostrarContatosBtn').addEventListener('click', function () {
  var listaContatos = document.getElementById('lista-contatos');
  if (listaContatos.style.display === 'none' || listaContatos.style.display === '') {
    listaContatos.style.display = 'block';
  } else {
    listaContatos.style.display = 'none';
  }
});

