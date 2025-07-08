const express=require('express');
const router=express.Router();

const {add,hello}=require('./controllers/testing');

router.post('/add',add);
router.get('/hello',hello);

module.exports=router;