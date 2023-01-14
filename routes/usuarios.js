
const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPatch,
        usuarioPost,
        usuariosDelete
    } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuarioPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);



module.exports = router;