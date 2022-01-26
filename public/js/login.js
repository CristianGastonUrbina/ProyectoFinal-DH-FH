window.onload = function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkValues();
  });

  function checkValues() {
    let emailValue = email.value;
    let passwordValue = password.value;

    if (emailValue === "") {
      setError(email, "Mete un email campeon");
    }

    if (passwordValue === "") {
      setError(password, "Poneme la password messi, poneme la pass");
    } else if (isStrongPass(passwordValue)) {
      setError(
        password,
        "El pass necesita al menos mayusculas, minusculas, caracteres especiales y un minimo de 8 caracteres"
      );
    }
  }

  function setError(element, message) {
    element.classList.add("error");
    element.nextElementSibling.innerText = message;
  }

  function isStrongPass(passwordValue) {
    let regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
    );
    console.log(regex.test(passwordValue));
    return !regex.test(passwordValue);
  }
};
