const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const searchRouter = require('./search');
const cartRouter = require('./cart');
const testingRouter = require('./testing');

router.use('/user', userRouter);
router.use('/search', searchRouter);    
router.use('/cart', cartRouter);
router.use('/testing', testingRouter);

module.exports = router;