// Franklin Nweke Services - contact.js
// A side project by Chigozie Franklin Nweke (Student ID: 8972856)

$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#contact-name').val().trim();
        const email = $('#contact-email').val().trim();
        const message = $('#contact-message').val().trim();
        let error = '';
        
        if (!name) {
            error += 'Name is required.<br>';
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            error += 'Valid email is required.<br>';
        }
        if (!message) {
            error += 'Message is required.<br>';
        }
        
        if (error) {
            $('#contact-message-area').html('<span style="color:#d32f2f">' + error + '</span>');
        } else {
            // Creates alert message field titles, and values
            const alertMessage = `Contact Form Submission:\n\n` +
                               `Name: ${name}\n` +
                               `Email: ${email}\n` +
                               `Message: ${message}`;
            
            alert(alertMessage);
            
            // Clear the form
            $('#contact-form')[0].reset();
            
            // Clear any previous messages
            $('#contact-message-area').html('');
        }
    });
}); 