document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var sendMessageButton = document.getElementById('sendMessageButton');

    if (sendMessageButton && contactForm) {
        sendMessageButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action
            if (contactForm.checkValidity()) { // Check if all fields are valid
                contactForm.submit(); // Submit the form
            } else {
                contactForm.reportValidity(); // Show validation messages
            }
        });
    }
});