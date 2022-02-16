window.addEventListener("load", function () {
  // capturo los elementos del formulario a validar
  let form = document.querySelector("#create-form");

  // creo que no necesito validar los select (options) porque se eligen de una lista
  // y no podrian quedar vacios!

  // let button4 = document.querySelector('#submitbtn');
  let name = document.querySelector("#name");
  let short_name = document.querySelector("#shortname");
  let producer = document.querySelector("#producer_id");
  let year = document.querySelector("#year"); // Año de cosecha
  let varietal = document.querySelector("#varietal_id");
  let type = document.querySelector("#type_id");
  let price = document.querySelector("#price");
  let imageProd = document.querySelector("#imageProd");
  let desc = document.querySelector("#description");

  let location = document.querySelector("#location");
  let altitude = document.querySelector("#altitude");
  let winemaker = document.querySelector("#primary");
  let varietal_comp = document.querySelector("#varietal_comp");
  let soil = document.querySelector("#soil");
  let abv = document.querySelector("#avb");
  let breeding = document.querySelector("#breeding");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let errores = [];

    // obligatorio para el sprint 7

    if (name.value == "") {
      errores.push("El nombre corto del producto no puede estar vacío");
      name.classList.add("erroresCPF");
    } else if (name.value.length < 5) {
      errores.push(
        "El nombre corto del producto debe tener al menos 5 caracteres"
      );
      name.classList.add("erroresCPF");
    }

    if (short_name.value == "") {
      errores.push("El nombre reducido del producto no puede estar vacío");
      short_name.classList.add("erroresCPF");
    } else if (short_name.value.length < 5) {
      errores.push(
        "El nombre reducido del producto debe tener al menos 5 caracteres"
      );
      short_name.classList.add("erroresCPF");
    } else if (short_name.value.length > 30) {
      errores.push(
        "El nombre reducido del producto debe tener, como máximo, 30 caracteres"
      );
      short_name.classList.add("erroresCPF");
    }

    if (producer.value == "") {
      errores.push("Debe elegir un productor");
      producer.classList.add("erroresCPF");
    }

    if (year.value < 1900) {
      errores.push("El año de cosecha no puede ser anterior a 1900");
      // trate de usar la funcion Date().getFullYear() pero da error
      year.classList.add("erroresCPF");
    } else if (year.value > 2022) {
      errores.push("El año de cosecha no puede ser posterior al año actual");
      year.classList.add("erroresCPF");
    }

    if (varietal.value == "") {
      errores.push("Debe elegir un varietal");
      varietal.classList.add("erroresCPF");
    }

    if (type.value == "") {
      errores.push("Debe elegir un tipo de vino");
      type.classList.add("erroresCPF");
    }

    if (price.value <= 0) {
      errores.push("El precio del producto debe ser mayor a 0");
      price.classList.add("erroresCPF");
    }

    if (imageProd.value != "") {
      // uso la validacion de la extension que hizo Facu
      let extPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;
      if (!extPermitidas.exec(imageProd.value)) {
        errores.push("El formato de la imagen debe ser JPG, JPEG, PNG o GIF");
        imageProd.classList.add("erroresCPF");
      }
    }

    if (desc.value == "") {
      errores.push("La descripción del producto no puede estar vacía");
      desc.classList.add("erroresCPF");
    } else if (desc.value.length < 20) {
      errores.push(
        "La descripción del producto debe tener 20 caracteres o más"
      );
      desc.classList.add("erroresCPF");
    }

    if (location.value == "") {
      errores.push("La ubicación del viñedo no puede estar vacía");
      location.classList.add("erroresCPF");
    }

    if (altitude.value == "") {
      errores.push("Debe ingresar una altitud");
      altitude.classList.add("erroresCPF");
    }

    if (winemaker.value == "") {
      errores.push("Debe elegir un enólogo");
      winemaker.classList.add("erroresCPF");
    }

    if (varietal_comp.value == "") {
      errores.push("La composición varietal no puede estar vacía");
      varietal_comp.classList.add("erroresCPF");
    }

    if (soil.value == "") {
      errores.push("La composición del suelo no puede estar vacía");
      soil.classList.add("erroresCPF");
    }

    if (abv.value < 0 || abv.value > 95) {
      errores.push("La graduación alcohólica debe estar entre 0 y 95%");
      abv.classList.add("erroresCPF");
    }

    if (breeding.value == "") {
      errores.push("La crianza no puede estar vacía, aunque sea un vino joven");
      breeding.classList.add("erroresCPF");
    }

    console.log(errores);

   if (errores.length > 0) {
      event.preventDefault();
      let ulErrores = document.querySelector(".erroresCPF ul");
      ulErrores.innerHTML = ""
      errores.forEach( error => {
          ulErrores.innerHTML += "<li>" + error + "</li>";      
    }) 
} else {
      alert("El producto fue creado de forma adecuada");
      form.submit();
    }
   
})
});
