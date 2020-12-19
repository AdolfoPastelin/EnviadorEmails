//  Variables  //


//  Variables para campos  //
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {

	//Campos del formulario
	email.addEventListener('blur', validarFormulario);
	asunto.addEventListener('blur', validarFormulario);
	mensaje.addEventListener('blur', validarFormulario);
}

//  Funciones  //


//Funcion que valida los campos del formulario
function validarFormulario(e) {

	//validar con clases de tailwind css
	if (e.target.value.length > 0) {
		console.log('el campo si contiene caracteres');
	} else {
		e.target.classList.add('border', 'border-red-500');
	}
}



