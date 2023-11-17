document.addEventListener('DOMContentLoaded', function() {
    // ... Your code here ...
    document.getElementById('copyEmail').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link action
    
        var email = this.getAttribute('data-email');
        
        // Use Clipboard API to copy the email
        navigator.clipboard.writeText(email).then(function() {
            console.log('E-mail copied to clipboard!');
            
            // Display the "E-mail copied" message
            var messageElement = document.getElementById('copyEmailMessage');
            messageElement.style.display = 'block';
            setTimeout(function() {
                messageElement.style.display = 'none';
            }, 2000);  // Message will disappear after 2 seconds
            
        }).catch(function(err) {
            console.error('Could not copy email: ', err);
        });
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    // Assuming your send message button has an id of 'sendMessageButton'
    var sendMessageButton = document.getElementById('sendMessageButton');

    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action
            document.getElementById('contactForm').submit(); // Submit the form
        });
    }
});
