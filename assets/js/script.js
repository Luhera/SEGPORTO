
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

  // Restante do seu código aqui...
});

// ... (outro código posterior)


	// Adicione um ouvinte de evento para o botão "Contatos de Emergência"
  document.getElementById('mostrarContatosBtn').addEventListener('click', function () {
    var listaContatos = document.getElementById('lista-contatos');
    if (listaContatos.style.display === 'none' || listaContatos.style.display === '') {
      listaContatos.style.display = 'block';
    } else {
      listaContatos.style.display = 'none';
    }
  });
// Verifique se o navegador suporta a Geolocalização
if ("geolocation" in navigator) {
  const userLocation = document.getElementById("userLocation");
  const localizacaoButton = document.getElementById("localizacaoButton");

  // Adicione um evento de clique ao botão
  localizacaoButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Exiba a localização no elemento <p>
      userLocation.textContent = `Sua localização: Latitude ${latitude}, Longitude ${longitude}`;
    }, (error) => {
      userLocation.textContent = "Não foi possível obter a localização.";
      console.error(error);
    });
  });
} else {
  console.log("Geolocalização não é suportada pelo seu navegador.");
}


