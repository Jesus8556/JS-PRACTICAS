//funciones en js

const saludar = function (nombre){
    return `hola ${nombre}`
}

const saludar2 =  (nombre) =>{
    return `hola ${nombre}`
}

const saludar3 =  (nombre) => `Hola ${nombre}`;
const saludar4 =  () => `Hola mundo`;



console.log(saludar("jesus"));
console.log(saludar2("Luis"));

console.log(saludar4());


const getUser = () =>{
    return{
        uid:"123",
        username:"jesus811"
    }
};
//tarea

function getActiveUser(nombre){
    return{
        uid:"123",
        username:nombre
    }
}

//modo flecha

const getActiveUser2 = (nombre) =>{
    return{
        uid:"123",
        username:nombre
    }

}

//implicito

const getActiveUser3 = (nombre) =>({
    uid:"123",
    username:nombre
});



const usuarioActivo = getActiveUser("Fernando");
const usuarioActivo2 = getActiveUser2("Jesus");
const usuarioActivo3 = getActiveUser3("Carlos")

console.log(usuarioActivo);
console.log(usuarioActivo2);
console.log(usuarioActivo3);

