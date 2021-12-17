let rectanguloUno = new Rectangulo(300, 300);

console.log(rectanguloUno.mostrarDatos());
console.log(rectanguloUno.mostrarArea());
console.log(rectanguloUno.mostrarPerimetro());

document.getElementById(`resultado`).innerHTML = rectanguloUno.dibujar();