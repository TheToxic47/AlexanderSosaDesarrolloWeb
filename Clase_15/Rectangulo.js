class Rectangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    mostrarArea(){
        return this.base*this.altura;
    }
    
    mostrarPerimetro(){
        return (this.base * 2) + (this.altura * 2);
    }

    mostrarDatos(){ 
        return `Base: ${this.base} Altura: ${this.altura}`;
    }

    dibujar(){
        return <div style="width: $(this.base)px; height: $(this.altura)px; background-color: blue; border: black 5px solid"></div>
    }
}