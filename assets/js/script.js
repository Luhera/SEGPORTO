
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


// Função para salvar a localização do usuário
function salvarLocalizacao() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const localizacao = `Latitude: ${latitude}, Longitude: ${longitude}`;

      // Exiba a localização na página ou faça o que desejar com ela.
      const targetElement = document.querySelector(".target");
      targetElement.textContent = "Localização Salva: " + localizacao;

      // Adicione a localização a um campo de formulário oculto
      const localizacaoInput = document.createElement("input");
      localizacaoInput.type = "hidden";
      localizacaoInput.name = "localizacao";
      localizacaoInput.value = localizacao;

      // Anexe o campo de localização ao formulário
      const form = document.querySelector("form");
      form.appendChild(localizacaoInput);
    });
  } else {
    alert("A geolocalização não é suportada neste navegador.");
  }
}

// Encontre o botão que acionará a função salvarLocalizacao
const askButton = document.getElementById("askButton");

// Adicione um ouvinte de evento de clique ao botão
if (askButton) {
  askButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    salvarLocalizacao(); // Chama a função para salvar a localização
  });
}
