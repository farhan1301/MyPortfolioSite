<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // reCAPTCHA validation
    $recaptchaSecret = '6Ld_PfIoAAAAAMoGFQrxmjKJx6ywwt1vrkB8oNTz';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
    $responseKeys = json_decode($response, true);

    // Check if reCAPTCHA validation was successful
    if(intval($responseKeys["success"]) !== 1) {
        echo "Please complete the reCAPTCHA validation.";
        return;
    }
    
    // ... rest of your code ...

    // Get form data
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set your email and subject
    $to = "your_email@example.com";
    $subject = "New message from $firstName $lastName";
    
    // Create the email content
    $body = "First Name: $firstName\n";
    $body .= "Last Name: $lastName\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";
    
    // Send the email
    if (mail($to, $subject, $body, "From: $email")) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
