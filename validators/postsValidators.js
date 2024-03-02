
//Se crea un array de objetos JSON que funcione como base de datos temporal para la API.
const posts = [
    {
        id:12345,
        title: 'Title1',
        body: 'Body'
    },
    {
        id:12346,
        title: 'Title2',
        body: 'Body'
    },
    {
        id:12347,
        title: 'Title3',
        body: 'Body'
    },
];
//Se crea una funcion que recibe como parametro el id a encontrar y devuelve el objeto buscado
const findP = (postid) => {
    //por medio del metodo find buscamos el objeto que iguale el id entregado con el id en la DB
    const foundP = posts.find((post) => post.id == postid);
    //si no encuentra no devuelve nada
    if (!foundP) {
        return;
    }
    //si encuentra devuelve el objeto
    return foundP;
};
//Se crea una funcion que recibe como parametro un objeto y devuelve la DB con el objeto agregado
const createP = (obj) => {
    //se crea la estructura del objeto a agregar en formato JSON
    const newObject = {
        id: obj.id,
        title: obj.title,
        body: obj.body
    }
    //Una vez creado el objeto se agrega a la DB
    posts.push(newObject)
    //Devuelve la DB actualizada con el nuevo objeto
    return posts;
}
//Se crea una funcion que recibe como parametro  el id del objeto a modificar y un objeto con los atributos a modificar, devuelve el objeto modificado
const updateP = (postid,body) => {
    //Se busca y almacena el indice de posicion del objeto a modificar en la BD
    const postIndex = posts.findIndex((post) => post.id == postid)
    //En caso tal de no encontrar un id no devuelve nada
    if (postIndex === -1) {
        return;
    }
    //Se crea el objeto a modificar
    const updatedPost = {
        ...posts[postIndex],
        ...body
    }
    //Se agrega el objeto creado en la ubicacion antes encontrada.
    posts[postIndex] = updatedPost;
    //Se devuelve el objeto creado
    return updatedPost;
}
//Se crea una funcion que recibe como parametro el id del objeto a eliminar
const deleteP = (postid) => {
    //Se busca y almacena el indice de posicion del objeto a eliminar de la BD
    const postIndex = posts.findIndex((post) => post.id == postid)
    //En caso tal de no encontrar un id no devuelve nada
    if (postIndex === -1) {
        return;
    }
    //Se elimina de la BD el indice encontrado
    posts.splice(postIndex,1);
    //Se devuelve el arreglo actualizado
    return posts;
}

//Se exporta todos los modulos creados
module.exports = {
    posts,
    createP,
    findP,
    updateP,
    deleteP
}