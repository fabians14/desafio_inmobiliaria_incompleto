const propiedadesJSON = [
    {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        m: 170
    },

    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130
    },

    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80
    },

    {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6
    },

    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200
    },

    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        cuartos: 5,
        metros: 500
    }
];

//let template = `
//<div class="propiedad">
//    <div class="img" style="background-image: url('${propiedadesJSON[0].src}')"></div>
//    <section>
//      <h5>${propiedadesJSON[0].nombre}</h5>
//    <div class="d-flex justify-content-between">
//       <p>Cuartos: ${propiedad.cuartos}</p>
//      <p>Metros: ${propiedad.metros}</p>
//        </div>
//        <p class="my-3">${propiedad.descripcion}</p>
//        <button class="btn btn-info">Ver más</button>
//    </section>
//</div>
//`;

let botonBuscar = document.getElementById("btnBuscar");
let inputCantidadCuartos = document.querySelector("#cantidadCuartos");
let inputMetrosMinimos = document.querySelector ("#metrosMin");
let inputMetrosMaximos = document.querySelector("#metrosMax"); 

botonBuscar.addEventListener("click", function () {
    let cantidadCuartos = inputCantidadCuartos.value;
    let metrosMinimos = inputMetrosMinimos.value;
    let metrosMaximos = inputMetrosMaximos.value;

    const inputs = [cantidadCuartos, metrosMinimos, metrosMaximos];

    if(!validarInputs(inputs)){
        return false;
    }

        let propiedadesFiltradas = filtrarPropiedades(propiedadesJSON, inputs);


});

const validarInputs = inputs => {
    for(let input of inputs){
            if(input == ""){
                alert("Faltan campos por llenar");
                return false;
            }
    }
    return true;    
};

const propiedadesFiltradas = (propiedades, inputs) => {

    let propiedadesFiltradas = [];
    let indexPropiedadesFiltradas = 0;

    for(let i = 0; i < propiedades.length; i++){
        if(
            propiedades[i].cuartos == inputs[0] &&
            propiedades[i].metros >= inputs[1] &&
            propiedades[i].metros <= inputs[2]
        ){
            propiedadesFiltradas[inputPorpiedadesFiltradas] = propiedades[i];
            indexPropiedadesFiltradas++;
        }
    }
    return propiedadesFiltradas;
}


