// creat the form for register + option to change to sign in only
function handleCreatMyForm() {
    var html = "\n  \n  <div class=\"wrapper\">\n  <div class=\"wrapper__info\"></div>\n<div class=\"container\" style=\"background-image:url(images/mybk.jpg)\">\n  <div class=\"container__form\">\n      <div class=\"container__form__SignIn\">\n\n      <button class=\"container__form__SignIn__btnsign\" id=\"btnsign\" onclick=\"handleSignIn()\">sign-in</button></div>\n      \n      <form onsubmit= \"handleRegister(event)\" class=\"registerForm\"> \n      <h2 class=\"registerForm__h2\">Register Here</h2>\n      <label class=\"registerForm__label\" for=\"name\">Name:</label>\n      <input class=\"registerForm__input\"  type=\"text\" name=\"name\" placeholder=\"enter name\">\n      <label class=\"registerForm__label\"  for=\"email\">Email:</label>\n     <input class=\"registerForm__input\" type=\"email\" name=\"email\" placeholder=\"enter email\">\n      <label class=\"registerForm__label\"  for=\"password\">Password:</label>\n          <input class=\"registerForm__input\" type=\"password\" name=\"password\" placeholder=\"enter password\">\n          <br>\n              <button class=\"registerForm__btn\" type=\"submit\">Register</button>\n              </form>\n  </div>\n            <div class=\"container__forminfo\">\n              <h1 class=\"container__forminfo__h1\">Tinder<span>FY</span></h1>\n              <h2 class=\"container__forminfo__h2\">still Alone, no worry here you can find what you looking for.</h2>\n              <h3 class=\"container__forminfo__h3\">consider our sub for 100% chance, dont stay alone at night</h3>\n            </div>\n</div>\n</div>\n    ";
    var body = document.querySelector("body");
    body.innerHTML = html;
}
