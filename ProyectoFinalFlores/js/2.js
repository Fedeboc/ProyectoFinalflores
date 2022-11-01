const form = document.querySelector("#formulario");
    
const enviarFormulario = (event) => {
event.preventDefault();

const {name, edad, email, password,} = event.target

let persona = edad.value >= 18 ? true : false;

persona1 = persona ? "Señor" : "Joven";

console.log(name.value, edad.value, email.value, password.value);

Swal.fire({
        title: "Registrado con exito",
        text: "Bienvenido " + persona1 + " " + name.value,
        confirmButtonText: "Aceptar",
      });
}

form.addEventListener("submit", enviarFormulario);


