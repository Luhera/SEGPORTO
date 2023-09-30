
function acessarCamera() {
  var captureInput = document.getElementById('captureInput');
  if (captureInput) {
    captureInput.click();
    captureInput.addEventListener('change', function (event) {
      var imageFile = event.target.files[0];
      if (imageFile) {
        var imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageFile);
        var imagemCapturada = document.getElementById('imagemCapturada');
        imagemCapturada.innerHTML = ''; // Limpa qualquer imagem anterior
        imagemCapturada.appendChild(imageElement);

        // Adicione um estilo máximo de largura para a imagem
        imageElement.style.maxWidth = '100%';
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

  var askButton = document.getElementById('askButton');
  var target = document.getElementById('target');
  
  function appendLocation(location) {
    var newLocation = document.createElement('p');
    newLocation.innerHTML = 'Latitude: ' + location.coords.latitude + ', Longitude: ' + location.coords.longitude;
    target.appendChild(newLocation);
  }
  
  askButton.addEventListener('click', function () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (location) {
        appendLocation(location);
      }, function (error) {
        console.error('Erro ao obter a localização: ' + error.message);
      });
    } else {
      target.innerText = 'Geolocation API não suportada.';
    }
  });
  

  