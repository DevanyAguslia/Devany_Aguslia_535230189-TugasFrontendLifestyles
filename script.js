// Script LocalStorage
$(document).ready(function () {
    // When the form is submitted
    $('.subscribe-form').on('submit', function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get values from the name and email inputs
        var name = $('#name').val();
        var email = $('#email').val();

        // Save name and email to localStorage
        if (name && email) {
            localStorage.setItem('subscriberName', name);
            localStorage.setItem('subscriberEmail', email);
            alert('Name saved: ' + name + '\nEmail saved: ' + email);

            // Clear input fields after submission
            $('#name').val('');
            $('#email').val('');
        } else {
            alert('Please enter your name and email.');
        }
    });
});