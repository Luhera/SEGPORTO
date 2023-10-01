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


var target = document.getElementById('target');

function appendLocation(location) {
    var newLocation = document.createElement('p');
    newLocation.textContent = 'Localização capturada: Latitude ' + location.coords.latitude + ', Longitude ' + location.coords.longitude + '';
    target.appendChild(newLocation);
}

document.addEventListener('DOMContentLoaded', function () {
    const askButton = document.getElementById('askButton');

    if ('geolocation' in navigator) {
        askButton.addEventListener('click', function () {
            navigator.geolocation.getCurrentPosition(function (location) {
                appendLocation(location);
            });
        });
    } else {
        target.textContent = 'API de Geolocalização não suportada.';
    }
});

