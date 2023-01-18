const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async( rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol) {
        throw new Error(`El rol ${ rol } no esta registrado en la base de datos`)
    }
}

const existeEmail = async( correo = '' ) => {
    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`'Este correo: ${ correo }, ya esta registrado'`)
    }
}

const existeUsuarioPorId = async( id ) => {
    //Verificar si el id existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`'Este id: ${ id }, no existe'`)
    }
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioPorId
}