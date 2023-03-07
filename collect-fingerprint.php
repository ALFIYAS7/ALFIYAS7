<?php
// Collect and store browser fingerprint
$data = file_get_contents("php://input");
$fingerprint = json_decode($data, true);
// Store fingerprint in database or file
file_put_contents("fingerprints.txt", json_encode($fingerprint) . "\n", FILE_APPEND);
?>