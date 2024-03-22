import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form')
const emailEL = document.querySelector('label [name="email"]');
const messageEL = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
    const email = emailEL.value;
    const message = messageEL.value;
    
    const formData = {
        email,
        message,
    };

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

onPageReload();

function onPageReload() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedMessage) {
        emailEL.value = savedMessage.email;
        messageEL.value = savedMessage.message;  
    }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault(); //reloading the page
    const email = emailEL.value;
    const message = messageEL.value;

    if (email == '' || message == '') {
        alert('Enter both input parameters!');
        form.reset();
        return;
    }

    const formData = { email, message };
    console.log(formData);
    form.reset();
    

    localStorage.removeItem(STORAGE_KEY);
}