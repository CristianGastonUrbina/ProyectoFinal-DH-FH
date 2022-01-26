window.onload = function () {
  let name = document.getElementById("name");
  let model = document.getElementById("model");
  let description = document.getElementById("description");
  let image = document.getElementById("image");
  let price = document.getElementById("price");
  let warranty = document.getElementById("warranty");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkValues();
    let errors = document.getElementsByClassName("error").length;
    if (errors === 0) {
      form.submit();
    }
  });

  function checkValues() {
    let nameValue = name.value;
    let modelValue = model.value;
    let descriptionValue = description.value;
    let imageValue = image.value;
    let priceValue = price.value;
    let warrantyValue = warranty.value;

    //Validacion Nombre
    if (nameValue === "") {
      setError(name, "Ponele un nombre a tu producto");
    } else if (nameValue.length < 6) {
      setError(name, "No seas tan escueto, al menos 5 letras");
    } else success(name);

    //Validacion Descripcion
    if (descriptionValue === "") {
      setError(description, "Ponele una description");
    } else if (descriptionValue.length < 20) {
      setError(description, "No seas tan escueto, al menos 20 letras");
    } else success(description);

    //Validacion imagen
    if (!/.jpg|.gif|.jpeg|.png/.test(imageValue) && imageValue !== "") {
      setError(image, "El archivo debe ser del tipo  jpg, gif, jpeg o png");
    } else success(image);

    //Validacion modelo
    if (modelValue === "") {
      setError(model, "El campo es obligatorio");
    } else success(model);

    //Validacion precio
    if (priceValue === "") {
      setError(price, "El campo es obligatorio");
    } else success(price);

    //Validacion garantia
    if (warrantyValue === "") {
      setError(warranty, "El campo es obligatorio");
    } else success(warranty);
  }

  //Funciones de error
  function setError(element, message) {
    element.classList.add("error");
    element.nextElementSibling.innerText = message;
  }

  function success(element) {
    element.nextElementSibling.innerText = "";
    element.classList.remove("error");
  }
};
