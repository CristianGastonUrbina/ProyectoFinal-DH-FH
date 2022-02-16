// Capturo el formulario y los inputs en un array

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Expresiones literales para comparar cada campo

const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo válido.
	password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-¿!¡;,:\.\?#@()"]).{8,}$/ // Mínimo seis caracteres, al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.
}

// Guardamos el estado de los campos

const campos = {
	email: false,
	password: false
}

// Creamos una función que validará todos los campos mediante un callback

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
			validarMail(e.target.value, "email")
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
}

// Creamos una función para validar cada campo individual

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).style.border = "2px solid limegreen";
		document.getElementById(`error-${campo}`).style.display = "none";
		campos[campo] = true; // Cambiamos el estado del campo
	} else {
		document.getElementById(`${campo}`).style.border = "2px solid red";
		document.getElementById(`error-${campo}`).style.display = "block";
		campos[campo] = false; // Cambiamos el estado del campo
	}
}

// Creamos una función para validar el mail en la db

const validarMail = (input, campo) => {
	fetch("http://localhost:3030/api/users")
            .then(result => {
                return result.json()
            })
			.then(data => {
				const arrayUsuarios = data.data;
				const usuarioRegistrado = arrayUsuarios.find(usuario => usuario.email == input);
				if(usuarioRegistrado){
					document.getElementById(`${campo}`).style.border = "2px solid limegreen";
					document.getElementById(`error-${campo}`).style.display = "none";
					campos[campo] = true; // Cambiamos el estado del campo
				} else {
					document.getElementById(`${campo}`).style.border = "2px solid red";
					document.getElementById(`error-${campo}`).style.display = "block";
					campos[campo] = false; // Cambiamos el estado del campo
				}
			})
			.catch(error => console.log(error))
}

// Recorremos cada input para aplicar los eventos que validarán los campos

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// Modificamos el comportamiento del formulario en función de las validaciones de cada campo

formulario.addEventListener('submit', (e) => {
	if(!campos.email && !campos.password){
        e.preventDefault(); // Interrumpimos el envío del formulario
	}
});