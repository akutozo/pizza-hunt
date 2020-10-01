const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');


//ROUTES
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;