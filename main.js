addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector(`#formulario`)
    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato = Object.fromEntries( new FormData(e.target));
        venta1= dato.venta1
        venta2=dato.venta2
        venta3=dato.venta3 
        sueldobase=dato.sueldobase
        nombre=dato.nombre
        comision=(venta1+venta2+venta3)*0.10     
        mostrar.innerHTML=`el usuario ${nombre} el pago es de : ${sueldobase+comision}`





    })


})