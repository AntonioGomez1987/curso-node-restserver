const { response } = require("express");
const Usuario = require('../models/usuario');
const bcryptjs = require('bcrypt');
const { generarJWT } = require("../helpers/generar-jwt");


const login = async( req, res = response ) => {

    const { correo, password } = req.body; 

    try {
        //Verificar si el Email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Correo no son correctos - correo'
            });
        }
        //Si el usuario esta actvo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario inactivo'
            });
        }
        //Verificar la contrasenia
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }
        //Generar el JWT (json web token)
        const token = await generarJWT( usuario.id );
        
        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}


module.exports = {
    login
}