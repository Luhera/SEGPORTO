
// ... (outro código anterior)

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const captureInput = document.getElementById('captureInput');
  const tirarFotoButton = document.getElementById('tirarFotoButton');
  const imagemCapturada = document.getElementById('imagemCapturada');

  // Evita que o formulário seja enviado quando o botão "Tirar foto do Incidente" for clicado.
  tirarFotoButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o envio do formulário
    acessarCamera();
  });

  // Função para acessar a câmera e exibir a imagem capturada.
  function acessarCamera() {
    if (captureInput) {
      captureInput.click();
      captureInput.addEventListener('change', function (event) {
        var imageFile = event.target.files[0];
        if (imageFile) {
          var imageElement = document.createElement('img');
          imageElement.src = URL.createObjectURL(imageFile);
          imagemCapturada.innerHTML = ''; // Limpa qualquer imagem anterior
          imagemCapturada.appendChild(imageElement);
          imageElement.style.maxWidth = '100%'; // Estilo para limitar a largura da imagem
        }
      });
    }
  }


});



// Adicione um ouvinte de evento para o botão "Contatos de Emergência"
document.getElementById('mostrarContatosBtn').addEventListener('click', function () {
  var listaContatos = document.getElementById('lista-contatos');
  if (listaContatos.style.display === 'none' || listaContatos.style.display === '') {
    listaContatos.style.display = 'block';
  } else {
    listaContatos.style.display = 'none';
  }
});

var target = document.getElementById('target');
var watchId;

function appendLocation(location, verb) {
  verb = verb || 'updated';
  var newLocation = document.createElement('p');
  newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
  target.appendChild(newLocation);
}

if ('geolocation' in navigator) {
  document.getElementById('askButton').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, 'fetched');
    });
    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
} else {
  target.innerText = 'Geolocation API not supported.';}