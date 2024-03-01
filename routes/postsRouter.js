const { Router } = require('express');
const { listPosts, createPost } = require('../controllers/postsController');

const router = Router();

router.get('/posts', listPosts);
router.post('/posts', createPost);

module.exports = router;