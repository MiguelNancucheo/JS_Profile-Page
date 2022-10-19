//console.log("page loaded...");

// cambio el nombre, asignando id a los elementos que se usaron.
let elem_a = document.getElementById("edit_prof")

const cambio_nombre = () => {
    let ele_nombre =  document.getElementById("nombre");
    ele_nombre.innerText = "Juanito Perez";
}
elem_a.addEventListener("click", cambio_nombre);

// al hacer un click en cualquier icon (clase 'icon') de Connection, eliminar el usuario
let elem_icon = document.getElementsByClassName("icon");
let elem_contcon = document.getElementById("ctd_conex");

const borra_request = (elem) => {
   //    console.log(elem.path[0]);//el icono
   //    console.log(elem.path[1]);//el span
   // console.log(elem.path[2]);// li de usuario
    elem.path[2].remove();

    let valor = elem_contcon.innerText;
    elem_contcon.innerText= valor - 1;

    if (elem.path[0].alt=="accept") {
        //que incremento ¿?
    }

    // console.log(elem);
}

for (let index = 0; index < elem_icon.length; index++) {
    elem_icon[index].addEventListener("click",borra_request);
}


