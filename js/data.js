let data = [{
        titulo: "Actualización, diagnóstico y caracterización de la operación de transporte por los esteros del Pacífico entre los departamentos de Nariño, Cauca y Valle del Cauca en el marco del proyecto Acuapista del Pacífico",
        subdireccion: "Transporte",
        categoria: "Estudios del panorama regional",
        year: "2018",
        tema: "Caracterización de la operación del transporte en el Pacífico Colombiano",
        description: "Caracterización de la operación del transporte en el tramo Tumaco – Buenaventura por los ríos y esteros del pacífico, mediante entrevistas dirigidas a identificar empresas que operan en la región, tipo de tripulantes, embarcaciones, inventarios de las principales rutas fluviales de la región."
    },
    {
        titulo: "Actualización, diagnóstico y caracterización de la operación de transporte por los esteros del Pacífico entre los departamentos de Nariño, Cauca y Valle del Cauca en el marco del proyecto Acuapista del Pacífico",
        subdireccion: "Transporte",
        categoria: "Estudios del panorama regional",
        year: "2018",
        tema: "Caracterización de la operación del transporte en el Pacífico Colombiano",
        description: "Caracterización de la operación del transporte en el tramo Tumaco – Buenaventura por los ríos y esteros del pacífico, mediante entrevistas dirigidas a identificar empresas que operan en la región, tipo de tripulantes, embarcaciones, inventarios de las principales rutas fluviales de la región."
    }
]



function dataInsert() {
    let title = document.querySelector('#titulo-libro');
    let subdireccion = document.querySelector('#subdireccion');
    let categoria = document.querySelector('#categoria');
    let year = document.querySelector('#year');
    let tema = document.querySelector('#tema');
    let description = document.querySelector('#description');
    title.innerHTML = data[0].titulo;
    subdireccion.innerHTML = data[0].subdireccion;
    categoria.innerHTML = data[0].categoria;
    year.innerHTML = data[0].year;
    tema.innerHTML = data[0].tema;
    description.innerHTML = data[0].description;
}

dataInsert()