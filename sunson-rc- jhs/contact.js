const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('formResponse');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from redirecting

    // Visual feedback during submission process
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    responseMessage.style.display = "none";

    const formData = new FormData(form);

    fetch('https://web3forms.com', {
        method: 'POST',
        body: formData
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            responseMessage.classList.add('success');
            responseMessage.classList.remove('error');
            responseMessage.innerText = "Message sent successfully!";
            form.reset(); // Empty fields on success
        } else {
            console.log(response);
            responseMessage.classList.add('error');
            responseMessage.classList.remove('success');
            responseMessage.innerText = json.message || "Something went wrong.";
        }
    })
    .catch(error => {
        console.log(error);
        responseMessage.classList.add('error');
        responseMessage.classList.remove('success');
        responseMessage.innerText = "Network error. Please try again later.";
    })
    .then(function() {
        // Reset submit button state
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    });
});
