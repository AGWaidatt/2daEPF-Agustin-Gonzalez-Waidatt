
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log("apreto Enter");
    }
});

const precioCuota = 3000
let cuotasAgregadas = document.querySelector("#cuotaAgregada")


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



 
