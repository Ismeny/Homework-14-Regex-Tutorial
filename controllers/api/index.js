const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./blogstRoutes');
// const commentRoutes = require('./commentsRoutes')

router.use('/user', userRoutes);
// router.use('/blogs', blogsRoutes);
// router.use('/comments', commentsRoutes);

module.exports = router;
