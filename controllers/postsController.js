const { response } = require('express');

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

const listPosts = (req,res = response) => {
    //conectar a BD
    res.statusCode = 200;
    res.json(posts);
};

const createPost = (req,res = response) =>{
    res.json({
        ok:true,
        ...req.body
    })
}

module.exports = {
    listPosts,
    createPost
}