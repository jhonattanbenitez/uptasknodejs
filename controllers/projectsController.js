const Proyectos = require('../models/Proyectos');
const slug = require('slug');
exports.projectsHome = (req, res) => {
    res.render("index", {
        nombrePagina: 'Proyectos'
    });
}
exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async(req, res) => {
    //validar que que le input no esté vacío

    const {nombre} = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'Agregar un nombre al Proyecto'});
    }
    //si hay errores
    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo proyecto',
            errores
        })
    }else{
        //No hay errores, insertar en la base de datos
        const url = slug(nombre).toLocaleLowerCase();
        const proyecto = await Proyectos.create({nombre, url});
        res.redirect('/')
           
    }
}