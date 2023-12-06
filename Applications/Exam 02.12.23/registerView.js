import { post } from "./requester.js";
import { setUserData } from "./util.js";

let context;

export function registerView(ctx) {
	context = ctx;

	const registerHTML = context.html`
	 <section id="register">
          
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Register</h2>
            <form class="register-form" @submit=${submitForm}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
         
        </section>
	`;

	context.render(registerHTML, context.root);
}

async function submitForm(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const email = formData.get('email');
	const password = formData.get('password');
	const rePass = formData.get('re-password');

	if (email.trim() == '' || password.trim() == '' || password != rePass) return window.alert('All fields are required!');

	const data = await post('/users/register', { email, password });
	setUserData(data);
	context.redirect('/');
}