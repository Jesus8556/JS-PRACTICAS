//objeto
const persona = {
    nombre:"luis",
    apellido:"gutierrez",
    edad:"20",
    direccion:{
        ciudad:"new york",
        zipcode:"4444",
    },
};


const persona2 = {
    ...persona
};

persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);