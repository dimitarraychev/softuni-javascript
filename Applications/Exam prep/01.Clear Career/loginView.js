import { post } from "./requester.js";
import { setUserData } from "./util.js";

let context;

export function loginView(ctx) {
    context = ctx;

    const loginHTML = context.html`
          <section id="login">
          <div class="form" @submit=${submitForm}>
            <h2>Login</h2>
            <form class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
    `;

    context.render(loginHTML, context.root);
}

async function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() == '' || password.trim() == '') return;

    const data = await post('/users/login', { email, password });
    setUserData(data);
    context.redirect('/');
}