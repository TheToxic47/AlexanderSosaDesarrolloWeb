function mostrarMensaje(parametro)
{   parametro.preventDefault();
    var uno = document.querySelector("#uno").value;
    var dos = document.querySelector("#dos"). value;
    var resultado = parseInt(uno)+parseInt(dos);
    mensaje = uno+ "+"+ dos+"="+resultado;
    document.querySelector("#mensaje").textContent =mensaje;
    
}
var formulario = document.querySelector("#formulario")
formulario.addEventListener("input", mostrarMensaje);

