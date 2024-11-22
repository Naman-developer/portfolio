// NAVBAR

const ham = document.querySelector('.ham');
const navUl = document.querySelector('nav ul');
const hamIcon = document.querySelector('.ham i');

ham.addEventListener('click', () => {
    navUl.classList.toggle('active');

    if (navUl.classList.contains('active')) {
        hamIcon.classList.remove('fa-bars');
        hamIcon.classList.add('fa-times');
    } else {
        hamIcon.classList.remove('fa-times');
        hamIcon.classList.add('fa-bars');
    }
});


// LOADER

window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});


// RESPONSE

function sendMsg() {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var userMessage = document.querySelector('#message').value;


    var send_message = `Name: ${name}%0AEmail: ${email}%0AMessage: ${userMessage}`;
    var telegram_chat_id = '-4558009880';
    var telegram_bot_token = '6778011694:AAGEgofMFS7BQGliTpZFrC_jMgDn_NT_xC0';
    var URL = `https://api.telegram.org/bot${telegram_bot_token}/sendMessage?chat_id=${telegram_chat_id}&text=${send_message}`;

    fetch(URL, {
        method: 'GET'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed');
            }
        })
        .then(data => {
            console.log('Message Sent Successfully');
            var btnSubmit = document.querySelector(".submit");
            btnSubmit.innerText = "Send Successful";
            btnSubmit.disabled = true;
            resetForm();
            userMessage.value = "";
        })
        .catch(error => {
            console.error('Request failed with error:', error);
        });
}

function resetForm() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#message').value = '';
}