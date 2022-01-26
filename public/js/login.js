window.onload = function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkValues();
    let errors = document.getElementsByClassName("error").length;
    if (errors === 0) {
      form.submit();
    }
  });

  function checkValues() {
    let emailValue = email.value;
    let passwordValue = password.value;

    //Validacion email
    if (emailValue === "") {
      setError(email, "Mete un email campeon");
    } else success(email);

    //Validacion password
    if (passwordValue === "") {
      setError(password, "Poneme la password messi, poneme la pass");
    } else if (isNotStrongPass(passwordValue)) {
      setError(
        password,
        "El pass necesita al menos mayusculas, minusculas, caracteres especiales y un minimo de 8 caracteres"
      );
    } else success(password);
  }

  function setError(element, message) {
    element.classList.add("error");
    element.nextElementSibling.innerText = message;
  }

  function isNotStrongPass(passwordValue) {
    let regex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    console.log(regex.test(passwordValue));
    return !regex.test(passwordValue);
  }

  function success(element) {
    element.nextElementSibling.innerText = "";
    element.classList.remove("error");
  }
};
