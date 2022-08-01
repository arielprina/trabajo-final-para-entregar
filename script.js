var myCarousel = document.querySelector('#Mycarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: false
})



function enviarFormulario(){
  
 
  error.style.color="red"



  var mensajesError = [];

  if(Nombre.value === null ||  Nombre.value === ""){
    mensajesError.push("Ingrese el Nombre");
  }
  if( email.value === "" || email.value === null){
    mensajesError.push("Ingrese el email");
  }
  if(mensaje.value === null ||  mensaje.value === ""){
    mensajesError.push("Ingrese el Mensaje");
}

    
error.innerHTML =  mensajesError.join(",  ");
return false;



}