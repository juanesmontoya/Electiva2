//Se importa el metodo response de la libreria express de nodeJSpara el manejo de peticiones HTTP
const { response } = require('express');
//Se importa la DB y sus validadores de datos en una variable para su uso
const postValidator = require('../validators/postsValidators')
//Se crea una funcion flecha que maneje la peticion get y devuelva la informacion de la DB
const listPosts = (req,res = response) => {
    //Se establece codigo de error
    res.statusCode = 200;
    //Se devuelve en formato JSON la informacion de la DB
    res.json(postValidator.posts);
};
//Se crea una funcion flecha que maneje la peticion get de un usuario en especifico
const listPost = (req, res = response) => {
    //Se requiere el id de los parametros de la peticion
    const {
        params: { postid }

    } = req;
    //si no hay parametros no devuelve nada
    if (!postid) {
        return;
    }
    //Se utiliza un validador de datos de la DB para buscar el objeto
    const singleP = postValidator.findP(postid);
    //Se establece codigo de error
    res.statusCode = 200;
    //Se devuelve en formato JSON la informacion de la DB
    res.json(singleP);
}
//Se crea una funcion flecha que maneje la peticion post para la creacion de registros
const createPost = (req,res = response) =>{
    //Se requiere el body de los parametros de la peticion con el objeto a crear
    const {
        body

    } = req;
    //Se utiliza un validador de datos de la DB para crear el objeto
    const newPost = postValidator.createP(body)
    //Se establece codigo de error
    res.statusCode = 201;
    //Se imprime por consola que fue creado
    console.log("User created successfuly.")
    //Se devuelve en formato JSON la informacion de la DB
    res.json(newPost);
}
//Se crea una funcion flecha que maneje la peticion push para la modificacion de registros
const updatePost = (req,res = response) =>{
    //Se requiere el body con el objeto a modificar y el id de los parametros de la peticion
    const {
        body,
        params: { postid },

    } = req;
    //si no hay parametros no devuelve nada
    if (!postid) {
        return;
    }
    //Se utiliza un validador de datos de la DB para modificar el objeto
    const updatedP = postValidator.updateP(postid,body);
    //Se establece codigo de error
    res.statusCode = 202;
    //Se imprime por consola que fue modificado
    console.log("User updated sucessfuly.")
    //Se devuelve en formato JSON la informacion de la DB
    res.json(updatedP);
}
//Se crea una funcion flecha que maneje la peticion delete para la eliminacion de registros
const deletePost = (req,res=response) => {
    ////Se requiere el id de los parametros de la peticion
    const {
        params: { postid },

    } = req;
    //si no hay parametros no devuelve nada
    if (!postid) {
        return;
    }
    //Se imprime la informacion de la DB en consola
    console.log(postValidator.posts)
    //Se utiliza un validador de datos de la DB para modificar el objeto
    const newArray = postValidator.deleteP(postid);
    //se imprime por consola que la transaccion fue exitosa
    //Se imprime por consola que fue eliminado e imprime la informacion de la DB actualizada
    console.log("User deleted successfuly. New Array= ")
    console.log(newArray)
    //Se establece codigo de error
    res.statusCode = 204;
    //Sen devuelve estado ok con mensaje de confirmacion
    res.send({ status: "Ok", data: "User deleted."})
}
//Exportamos los controladores de peticiones HTTP
module.exports = {
    listPosts,
    listPost,
    createPost,
    updatePost,
    deletePost
}