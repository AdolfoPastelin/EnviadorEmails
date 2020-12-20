//  Variables  //
const formulario = document.querySelector('#enviar-mail');

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
		//elimina los errores (si es que los hay)
		const error = document.querySelector('p.error');
		error.remove();

		e.target.classList.remove('border', 'border-red-500');
		console.log('el campo si contiene caracteres');
	} else {
		e.target.classList.add('border', 'border-red-500');

		mostrarError('Todos los campos son obligatorios, no puede quedar ni uno vacio');
	}

	if (e.target.type === 'email') {
		const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if (er.test(e.target.value)) {
			console.log('Email valido');
		} else {
			console.log('El email no es valido');
		}
	}
}

function mostrarError(mensaje) {
	//se crea el parrafo donde estará el texto con la info del error
	const mensajeError = document.createElement('p');

	//Se asigna el texto del error y se guarda en parametro de la función "mensaje"
	mensajeError.textContent = mensaje;

	//se aplican estilos al error
	mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500',
		'p-3', 'mt-5', 'text-center', 'error');

	//Si se desea usar la propiedad "length" se debe usar un querySelectorAll ya que
	//con un querySelector al no contener esta propiedad disponible, arrojará un null
	const errores = document.querySelectorAll('.error');
	if (errores.length === 0) {
		//se añade el child (p) al parent (div) en el HTML
		formulario.appendChild(mensajeError);
	}
}