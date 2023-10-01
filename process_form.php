<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $horario = $_POST["horario"];
    $gravidade = $_POST["gravidade"];
    $experiencia = $_POST["experiencia"];

    // Configurar informações de e-mail
    $to = "alucena933@gmail.com"; // Substitua pelo seu endereço de e-mail
    $subject = "Novo relato de incidente de $nome";
    $message = "Nome: $nome\n";
    $message .= "Horário: $horario\n";
    $message .= "Nível de gravidade: $gravidade\n";
    $message .= "Descrição do incidente:\n$experiencia\n";

    // Enviar e-mail
    mail($to, $subject, $message);

    // Redirecionar de volta para a página do formulário após o envio
    header("Location: formulario.html");
    exit();
}
?>
