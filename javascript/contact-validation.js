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
        return 'Please select a date starting from tomorrow.';
    }
    if (checkDuration() === false) {
        return 'Please enter a valid duration.';
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
    if (confirm('From: ' + document.getElementById('inputEmail').value + '\n'
    + 'To: 230422898@aston.ac.uk\n\n' 
    + document.getElementById('inputText').value 
    + '\n\nPrefer to be contacted via ' + contactPreference + '\nProject to start at: ' + document.getElementById('inputDate').value + ' for ' + document.getElementById('inputDuration').value + ' days. \n'
    + '\nConfirm message?')) {
        document.getElementById('inputText').value = '';
        document.getElementById('inputDate').value = '';
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
 * Checks if the selected date is after today.
 * @returns {boolean} True if the selected date is after today, otherwise false.
 */
function checkDate() {
    const selectedDate = new Date(document.getElementById('inputDate').value);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    selectedDate.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);

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
    if (duration >= 1) {
        return true;
    }
    return false;
}