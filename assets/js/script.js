
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
        var imagemCapturada = document.getElementById('imagemCapturada');
        imagemCapturada.innerHTML = ''; // Limpa qualquer imagem anterior
        imagemCapturada.appendChild(imageElement);
      }
    });
  }
}


	// Adicione um ouvinte de evento para o botão "Contatos de Emergência"
  document.getElementById('mostrarContatosBtn').addEventListener('click', function () {
    var listaContatos = document.getElementById('lista-contatos');
    if (listaContatos.style.display === 'none' || listaContatos.style.display === '') {
      listaContatos.style.display = 'block';
    } else {
      listaContatos.style.display = 'none';
    }
  });



  