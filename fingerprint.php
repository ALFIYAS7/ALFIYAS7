<?php
// Send browser fingerprint to email
$data = file_get_contents("php://input");
$fingerprint = json_decode($data, true);
$to = "alfiyas7@outlook.com";
$subject = "Browser Fingerprint";
$message = json_encode($fingerprint, JSON_PRETTY_PRINT);
$headers = "From: webmaster@example.com";
mail($to, $subject, $message, $headers);
?>
