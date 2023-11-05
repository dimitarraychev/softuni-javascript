const notifications = document.querySelector('.notification');
const userBtns = document.querySelector('#user');
const formRef = document.querySelector('form');
formRef.addEventListener('submit', onLogin);

userBtns.style.display = 'none';

async function onLogin(event) {
    event.preventDefault();

    const form = new FormData(formRef);
    const email = form.get('email');
    const password = form.get('password');

    if (email.trim() === '' || password.trim() === '') return;

    const uri = 'http://localhost:3030/users/login';
    const data = {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ email, password })
    }
    
    try {
        const response = await fetch(uri, data);
        const responseData = await response.json();
        if (response.status !== 200) {
            notifications.textContent = responseData.message;
            return;
        }
        sessionStorage.setItem('email', responseData.email);
        sessionStorage.setItem('id', responseData._id);
        sessionStorage.setItem('token', responseData.accessToken);
        formRef.reset();
        window.location = ('index.html');
    } catch (error) {
        formRef.reset();
        console.log(error);
    }
}