const form = document.querySelector('form');
const toastText = document.getElementById('liveToastText');
// const sendToastText = document.getElementById('sendToastText');

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const msg = validateForm();
    // creates toast with message
    const toast = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'));
    toastText.innerHTML = msg;
    toast.show();
});

/**
 * Validates the form inputs, checks for errors and sends a message if all validations pass.
 * @returns {string} The result message indicating errors or success.
 */
function validateForm() {
    if (checkEmails() === false) {
        return 'Emails do not match!';
    }
    if (checkDate() === false) {
        return 'Please select a date and time starting from tomorrow, after 9:00 AM GMT+0.';
    }
    if (checkDuration() === false) {
        return 'Please enter a duration between 1 and 120 minutes.';
    }
   
    // const sendToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('sendToast'));
    // sendToastText.innerHTML = 'To be implemented';
    // sendToast.show();
    var contactPreference;
    if (document.getElementById('radioEmail').checked) {
        contactPreference = 'email';
    } else {
        contactPreference = 'phone';
    }

    // show confirmation message with formatted content of the message
    if (confirm('To: 230422898@aston.ac.uk\n\n' + document.getElementById('inputText').value + '\n\nPrefer to be contacted via ' + contactPreference + '\nConfirm message?')) {
        document.getElementById('inputText').value = '';
        document.getElementById('inputDateTime').value = '';
        document.getElementById('inputDuration').value = '';
        return 'Message sent! I will get back to you soon. Thanks!';
    } else {
        return 'Message not sent.';
    }
}


/**
 * Checks if the entered email and confirm email match.
 * @returns {boolean} True if the emails match, otherwise false.
 */
function checkEmails() {
    const email = document.getElementById('inputEmail').value;
    const confirmEmail = document.getElementById('inputConfirmEmail').value;
    if (email !== confirmEmail) {
        return false;
    }
    return true;
}


/**
 * Checks if the selected date is after tomorrow at 9.
 * @returns {boolean} True if the selected date is after tomorrow, otherwise false.
 */
function checkDate() {
    const dateTime = document.getElementById('inputDateTime').value;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // set date to tomorrow
    tomorrow.setHours(9, 0, 0, 0); // set time to 00:00:00
    const selectedDate = new Date(dateTime);
    if (selectedDate < tomorrow) {
        return false;
    }
    return true;
}


/**
 * Checks if the duration value is within the valid range of 1 to 120 minutes.
 * @returns {boolean} True if the duration is valid, otherwise false.
 */
function checkDuration() {
    const duration = document.getElementById('inputDuration').value;
    if (duration >= 1 && duration <= 120) {
        return true;
    }
    return false;
}