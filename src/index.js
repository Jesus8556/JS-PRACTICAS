//desestructuracion
//asignacion desestructurante

const person = {
    nombre:"tony",
    edad:45,
    clave:"ironman",
    rango:"soldado"
};

const {nombre,edad,clave} = person;

console.log(nombre);
console.log(edad);
console.log(clave);


const usecontext = ({clave,nombre,edad,rango = "Capitan"}) =>{
    //console.log(nombre, edad,rango)
    return{
        nombreClave:clave,
        anios:edad,

    };
}

const {nombreClave,anios} = usecontext({clave,edad});

//const avenger = usecontext(person);

console.log(nombreClave,anios);

