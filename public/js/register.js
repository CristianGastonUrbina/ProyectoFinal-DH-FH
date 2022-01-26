window.onload = function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let form = document.getElementById("form");
  let first_name = document.getElementById("first_name");
  let last_name = document.getElementById("last_name");
  let phone = document.getElementById("phone");
  let zip = document.getElementById("zip");
  let image = document.getElementById("image");

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
    let first_nameValue = first_name.value;
    let last_nameValue = last_name.value;
    let phoneValue = phone.value;
    let zipValue = zip.value;
    let imageValue = image.value;

    //Validacion Email
    if (emailValue === "") {
      setError(email, "Mete un email campeon");
    } else {
      success(email);
    }

    //Validadion  Nombre
    if (first_nameValue === "") {
      setError(
        first_name,
        "Mete un nombre, como te decimos sino? Natalia Natalia??"
      );
    } else if (first_nameValue.length < 2) {
      setError(
        first_name,
        "Si te llamas Victor, no me pongas V... ponele voluntad viejo"
      );
    } else success(first_name);

    //Validacion Apellido
    if (last_nameValue === "") {
      setError(
        last_name,
        "Mete un nombre, como te decimos sino? Natalia Natalia??"
      );
    } else if (last_nameValue.length < 2) {
      setError(last_name, "A menos que seas la Flor, tu apellido no es solo V");
    } else success(last_name);

    //Validacion PAssword
    if (passwordValue === "") {
      setError(password, "Sin no hay pass, hay tabla");
    } else if (isNotStrongPass(passwordValue)) {
      setError(
        password,
        "El pass necesita al menos mayusculas, minusculas, caracteres especiales y un minimo de 8 caracteres"
      );
    } else success(password);

    //Validacion imagen
    if (!/.jpg|.gif|.jpeg|.png/.test(imageValue) && imageValue !== "") {
      setError(image, "El archivo debe ser del tipo  jpg, gif, jpeg o png");
    } else success(image);

    //Validacion telefono
    if (phoneValue === "") {
      setError(phone, "El campo es obligatorio");
    } else success(phone);

    //Validacion zip
    if (zipValue === "") {
      setError(zip, "El campo es obligatorio");
    } else success(zip);
  }

  //Funciones de error
  function setError(element, message) {
    element.classList.add("error");
    element.nextElementSibling.innerText = message;
  }

  function isNotStrongPass(passwordValue) {
    let regex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    return !regex.test(passwordValue);
  }

  function success(element) {
    element.nextElementSibling.innerText = "";
    element.classList.remove("error");
  }
};
