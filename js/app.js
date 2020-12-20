//  Variables  //
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//  Variables para campos  //
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//E-R que valida que el email tenga una sintaxis correcta.
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eventListeners();
function eventListeners() {

	//Campos del formulario
	email.addEventListener('keydown', validarFormulario);
	asunto.addEventListener('blur', validarFormulario);
	mensaje.addEventListener('blur', validarFormulario);

	//Enviar email
	formulario.addEventListener('submit', enviarEmail);
}
	//renicia uun formulario
	resetBtn.addEventListener('click', resetearFormulario);

//  Funciones  //

//Funcion que valida los campos del formulario
function validarFormulario(e) {

	//validar con clases de tailwind css
	if (e.target.value.length > 0) {
		//elimina los errores (si es que los hay)
		const error = document.querySelector('p.error');
		if (error) {
			error.remove();
		}

		e.target.classList.remove('border', 'border-red-500');
		console.log('el campo si contiene caracteres');
	} else {
		e.target.classList.add('border', 'border-red-500');

		mostrarError('Todos los campos son obligatorios, no puede quedar ni uno vacio');
	}

	if (e.target.type === 'email') {

		if (er.test(e.target.value)) {
			const error = document.querySelector('p.error');
			if (error) {
				error.remove();
			}

			e.target.classList.remove('border', 'border-red-500');
		} else {
			e.target.classList.add('border', 'border-red-500');
			mostrarError('Email no valido');
		}
	}
	
	if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
		console.log('Pasaste la validación');
		btnEnviar.disabled = false;
		btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
	} else {
		console.log('Hay campos por validar');
		btnEnviar.disabled = true;
		btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
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

function enviarEmail(e) {
	//previene que se mande al link, solo se mostrará en la URL
	e.preventDefault();

	//Mostrar el spinner
	const spinner = document.querySelector('#spinner');
	spinner.style.display = 'flex';

	//Despues de un segundo ocultar el spinner y mostrar el mensaje.
	setTimeout(() => {
		spinner.style.display = 'none';

		const parrafo = document.createElement('p');
		parrafo.textContent = 'El mensaje se envió correctamente';
		parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white',
		'font-bold', 'uppercase');

		formulario.insertBefore(parrafo, spinner);

		setTimeout(() => {
			parrafo.remove();

			resetearFormulario();
		}, 5000);

		parrafo.remove(); //Eliminar el mensaje de exito
	}, 1000);
}

//Funcion que resetea el formulario
function resetearFormulario() {
	formulario.reset();
}

function resetearFormulario() {
	formulario.reset();
}