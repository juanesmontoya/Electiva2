//Requerimos el metodo router de la libreria express  de nodeJS que funciona como enrutador
const { Router } = require('express');
//Importamos en una variable el controlador
const postController = require('../controllers/postsController');
//Almacenamos el enrutador en una variable para su uso
const router = Router();

//Establecemos las rutas de peticiones HTTP de nuestra API
router.get('/posts', postController.listPosts);
router.get('/posts/:postid', postController.listPost);
router.post('/posts', postController.createPost);
router.patch('/posts/:postid', postController.updatePost);
router.delete('/posts/:postid', postController.deletePost);

//Exportamos las rutas
module.exports = router;