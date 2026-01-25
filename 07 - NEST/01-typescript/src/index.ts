function hola(name: string): string {
    return `Hola ${name}`;
}

console.log(hola('Juan'));

let numero: number = 42;

// numero = 'hola'  //error


let variable: number | string | boolean;

let variable2: null;

variable2 = null;

interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

type Producto = {
    id: number;
    nombre: string;
    precio: number;
}

const objeto: Usuario = {
    nombre: 'Ana',
    edad: 30,
    email: 'ana@email.com'
}

const producto: Producto = {
    id: 1,
    nombre: 'Camiseta',
    precio: 20
}

function hola2(usuario: Usuario): string {
    return `Hola ${usuario.nombre}`;
}

//npm i -g @nestjs/cli