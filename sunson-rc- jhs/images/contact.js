const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function senEmail() {
    const bodyMessga = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Mess: ${message.value}';
    senEmail.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@importScripts.com",
        Subject: subject.value,
        Body: bodymessage
    }).then(
        message => (message == "OK") {
            Swal.fire({
                title: "Good job!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
               item.classList.remove("error");
               item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
               item.parentElement.classList.add("error");
            }
        } 
    )
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    //sendEmail();
});