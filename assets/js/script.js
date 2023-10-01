
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


const userLocation = document.getElementById("userLocation");
const getLocationButton = document.getElementById("getLocationButton");

// Função para obter a localização do usuário
function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        userLocation.textContent = `Sua localização: Latitude ${latitude}, Longitude ${longitude}`;
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            userLocation.textContent =
              "O usuário não permitiu o acesso à sua localização.";
            break;
          case error.POSITION_UNAVAILABLE:
            userLocation.textContent =
              "As informações de localização não estão disponíveis.";
            break;
          case error.TIMEOUT:
            userLocation.textContent =
              "A solicitação de localização do usuário expirou.";
            break;
          default:
            userLocation.textContent =
              "Não foi possível obter a localização do usuário.";
        }
      }
    );
  } else {
    userLocation.textContent = "A geolocalização não é suportada neste navegador.";
  }
}

// Adicione um ouvinte de evento para o botão
getLocationButton.addEventListener("click", getUserLocation);
