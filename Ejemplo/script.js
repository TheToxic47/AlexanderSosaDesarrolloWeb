var nueve = document.getElementById('nueve');
var ocho = document.getElementById('ocho');
var siete = document.getElementById('siete');
var seis = document.getElementById('seis');
var cinco = document.getElementById('cinco');
var cuatro = document.getElementById('cuatro');
var tres = document.getElementById('tres');
var dos = document.getElementById('dos');
var uno = document.getElementById('uno');
var cero = document.getElementById('cero');


nueve.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(9);
})
ocho.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(8);
})
siete.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(7);
})
seis.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(6);
})
cinco.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(5);
})
cuatro.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(4);
})
tres.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(3);
})
dos.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(2);
})
uno.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(1);
})
cero.addEventListener('click', function(e) {
    e.preventDefault();
    ponerNumero(0);
})


function ponerNumero(n1){
    document.getElementById("calculo").textContent = n1;
    console.log(n1);
}