document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log("apreto Enter");
    }
});

const precioCuota = 3000
let cuotasAgregadas = document.querySelector("#cuotaAgregada")
let dataAgregada = document.querySelector("#dataAgregada")


function añadirCuota(){
    let cantidadCuotas = parseInt(prompt("Ingrese numero de cuotas"))
    let lista = document.createElement("div")

    if((cantidadCuotas < 13) && (cantidadCuotas > 0)){
        let cuotaTabla = {
            cantidad : cantidadCuotas,
            total: cantidadCuotas * precioCuota,
        }
        let cuota = document.createElement("li")
        let button = document.createElement("button")

        cuota.innerHTML = `Cantidad:${cuotaTabla.cantidad} Precio total:${cuotaTabla.total}`
        button.innerHTML = `Eliminar`
        lista.appendChild(cuota)
        lista.appendChild(button)
        cuotasAgregadas.appendChild(lista)
        button.onclick = () => {borrar(lista)}  
    }else{
        alert("ingrese otro valor")
        añadirCuota()
    }
}


borrar = (lista)=>{
    lista   .remove()

}


let form = document.getElementById("form")

function enviarDato(){
    localStorage.setItem("formulario", JSON.stringify(document.formulario.dato.value));
}


function recuperarDato(){
    JSON.parse(localStorage.getItem("formulario"))
    console.log(JSON.parse(localStorage.getItem("formulario")));
}




function getData(){
    document.querySelector(".getApiData")
    console.log("hola")
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(json => mostrarDataAPI(json))
}




function mostrarDataAPI(dataApi){
    let cantidadCuotas = parseInt(prompt("Ingrese numero de cuotas"))
    let lista = document.createElement("div")

    dataApi.forEach(element => {
        let data = document.createElement("li")
        data.innerHTML = `${element.title}`
        
        lista.appendChild(data)
    });
    dataAgregada.appendChild(lista)

}

 
